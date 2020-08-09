import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'
import { hexbin } from 'd3-hexbin'

import './App.css'

import BusStopCoordinates from './data/bus_stops_coords.json'
import BangaloreRegionBoundaries from './data/bangalore_region_boundaries.json'

import typeCoords from './utils/typeCoords'

function App() {
  const [dimensions, setDimensions] = useState({
    width: 1200,
    height: 1200,
  })
  const { width, height } = dimensions

  useEffect(() => {
    const projection = d3
      .geoMercator()
      .translate([width / 2, height / 2])
      // scale to zoom on the center
      .scale(Math.pow(3, 11))
      //coordinates of bangalore
      .center([77.624566, 12.981599])

    // project the coordinates to right points
    BusStopCoordinates.forEach((data) => typeCoords(data, projection))

    const geoGenerator = d3.geoPath().projection(projection)

    // Join the FeatureCollection's features array to path elements
    const map = d3.select('svg')

    //configure hexbin generator to use
    const hexbinGen = hexbin()
      .extent([
        [0, 0],
        [width, height],
      ])
      .radius(10)
    const radius = d3.scaleSqrt().domain([0, 12]).range([0, 10])

    // Create path elements and update the d attribute using the geo generator
    map
      .append('g')
      .attr('id', 'bangalore-map')
      .selectAll('path')
      .data(BangaloreRegionBoundaries.features)
      .enter()
      .append('path')
      .attr('d', geoGenerator)

    //Join hexagon data and then create them
    map
      .append('g')
      .selectAll('path')
      .data(
        hexbinGen(BusStopCoordinates).sort(function (a, b) {
          return b.length - a.length
        })
      )
      .enter()
      .append('path')
      .attr('d', function (d) {
        return hexbinGen.hexagon(radius(d.length))
      })
      .attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      })
  }, [width, height])
  return (
    <>
      <svg width={width} height={height}></svg>
    </>
  )
}

export default App
