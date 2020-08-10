import { useEffect } from 'react'
import * as d3 from 'd3'

import BusStops from '../data/bus_stops_in_region.json'

import cleanClassAndID from '../utils/cleanClassAndID'
import maxValueInRegion from '../utils/maxValueInRegion'

function useChloropleth(width) {
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
      // Note below places current class on all 'path' elements that have a parent 'g'
      d3.selectAll('path')
        .on('mouseover', function () {
          this.parentElement.tagName === 'g' &&
            d3.select(this).classed('current', true)
        })
        .on('mouseout', function () {
          this.parentElement.tagName === 'g' &&
            d3.select(this).classed('current', false)
        })
    }
  }, [width])
}
export default useChloropleth
