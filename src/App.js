import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'

import './App.css'

import BangaloreRoutes from './data/routes.json'
import BangaloreBusStops from './data/bus_stops.json'
import BangaloreSchools from './data/schools.json'
import BangaloreBoundaries from './data/bangalore_boundaries.json'

function App() {
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 })
  const { width, height } = dimensions

  useEffect(() => {
    var projection = d3
      .geoMercator()
      .translate([width / 2, height / 2])
      // scale to zoom on the center
      .scale(Math.pow(10, 5))
      //coordinates of bangalore
      .center([77.624566, 12.981599])

    var geoGenerator = d3.geoPath().projection(projection)

    // Join the FeatureCollection's features array to path elements
    var u = d3
      .select('svg>g#bangalore-map')
      .selectAll('path')
      .data(BangaloreBoundaries.features)

    // Create path elements and update the d attribute using the geo generator
    u.enter().append('path').attr('d', geoGenerator)
  }, [width, height])
  return (
    <>
      <svg width={width} height={height}>
        <g id="bangalore-map"></g>
      </svg>
    </>
  )
}

export default App
