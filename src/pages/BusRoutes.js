import React, { useEffect } from 'react'
import * as d3 from 'd3'

import './BusRoutes.css'

import BusStopRoutes from '../data/routes.json'

import useSchools from '../hooks/useSchools'
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
  useSchools({
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
      .range(['rgb(250,0,0)', 'rgb(0,0,250)'])

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
    d3.select('svg')
      .append('g')
      .selectAll('rect')
      .data([
        0,
        maxDistance / 4,
        maxDistance / 2,
        (3 * maxDistance) / 4,
        maxDistance,
      ])
      .enter()
      .append('rect')
      .attr('class', 'color-scale-rect')
      .attr('fill', (d) => colorScale(d))
      .attr('x', (d, i) => 80 * i + width - 500)
      .attr('y', 10)
      .attr('width', 80)
      .attr('height', 10)
    d3.select('svg')
      .append('g')
      .selectAll('text')
      .data([
        0,
        maxDistance / 4,
        maxDistance / 2,
        (3 * maxDistance) / 4,
        maxDistance,
      ])
      .enter()
      .append('text')
      .attr('x', (d, i) => 80 * i + width - 500)
      .attr('y', 33)
      .attr('fill', 'black')
      .text((d) => '|' + d)
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
