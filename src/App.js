import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'

import './App.css'
import BusStops from './data/bus_stops_in_region.json'

import useBangaloreMap from './hooks/useBangaloreMap'
import cleanClassAndID from './utils/cleanClassAndID'
import maxValueInRegion from './utils/maxValueInRegion'
import Modal from './components/Modal'

function App() {
  const dimensions = {
    width: 1200,
    height: 1200,
  }
  const { width, height } = dimensions

  useBangaloreMap({
    selector: 'svg#bangalore-map',
    width: width,
    height: height,
  })
  useEffect(() => {
    if (d3.select('g>path')) {
      const maxBusStops = maxValueInRegion(BusStops)
      const colorScale = d3
        .scaleLinear()
        .domain([0, maxBusStops])
        .range(['rgb(0,200,200)', 'rgb(0,0,100)'])

      for (let region in BusStops) {
        d3.selectAll(`.${cleanClassAndID(region)}`)
          .attr('fill', () => {
            return colorScale(BusStops[region].length)
          })
          .attr('stroke', () => {
            return colorScale(BusStops[region].length)
          })
      }
      d3.select('svg')
        .append('g')
        .selectAll('rect')
        .data([
          0,
          maxBusStops / 4,
          maxBusStops / 2,
          (3 * maxBusStops) / 4,
          maxBusStops,
        ])
        .enter()
        .append('rect')
        .attr('class', 'color-scale-rect')
        .attr('fill', (d) => colorScale(d))
        .attr('x', (d, i) => 50 * i + width - 500)
        .attr('y', 10)
        .attr('width', 50)
        .attr('height', 10)
      d3.select('svg')
        .append('g')
        .selectAll('text')
        .data([
          0,
          maxBusStops / 4,
          maxBusStops / 2,
          (3 * maxBusStops) / 4,
          maxBusStops,
        ])
        .enter()
        .append('text')
        .attr('x', (d, i) => 50 * i + width - 500)
        .attr('y', 33)
        .attr('fill', 'black')
        .text((d) => '|' + d)
    }
  })
  return (
    <>
      <h1>Distribution of bus stops in Bangalore</h1>
      <h2>Number of bus stops per region</h2>
      <svg id="bangalore-map" viewBox={`0 0 ${width} ${height}`}></svg>
    </>
  )
}

export default App
