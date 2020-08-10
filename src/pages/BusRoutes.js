import React, { useEffect } from 'react'
import * as d3 from 'd3'

import './BusRoutes.css'

import BusStopRoutes from '../data/routes.json'
import BangaloreRegionBoundaries from '../data/bangalore_region_boundaries.json'

import useBangaloreMap from '../hooks/useBangaloreMap'

function BusRoutes() {
  const dimensions = {
    width: 800,
    height: 850,
  }
  const { width, height } = dimensions
  useBangaloreMap({
    width,
    height,
    selector: '#bus-routes>svg',
  })
  useEffect(() => {
    const maxTrips = d3.max(BusStopRoutes.features, (d) => d.properties.trips)
    const maxDistance = d3.max(
      BusStopRoutes.features,
      (d) => d.properties.distance
    )
    const map = d3.select('#bus-routes>svg')
    const projection = d3
      .geoMercator()
      .translate([width / 2, height / 2])
      // scale to zoom on the center
      .fitSize([width, height], BusStopRoutes)
    const colorScale = d3
      .scaleLinear()
      .domain([0, maxDistance])
      .range(['rgb(0,100,200)', 'rgb(0,0,100)'])

    const geoGenerator = d3.geoPath().projection(projection)
    map
      .append('g')
      .selectAll('path')
      .data(BusStopRoutes.features)
      .enter()
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', (d) => {
        return colorScale(d.properties.distance)
      })
      .attr('stroke-width', (d) => {
        // the route with maximum trips would be 3px bold
        return (d.properties.trips / maxTrips) * 3
      })
      .attr('d', geoGenerator)
      .on('mouseover', (d) => {
        console.log(d)
      })
  }, [width, height])
  return (
    <>
      <h1>Bivariate map of Bus Routes in Bangalore</h1>
      <h2>The thick lines show more no. of trips for a particular bus</h2>
      <h2>The color shows the length of route</h2>
      <div id="bus-routes">
        <svg viewBox={`0 0 ${width} ${height}`}></svg>
      </div>
    </>
  )
}

export default BusRoutes
