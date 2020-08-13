import { useEffect } from 'react'
import * as d3 from 'd3'

import BusStops from '../data/bus_stops_in_region.json'

import cleanClassAndID from '../utils/cleanClassAndID'
import maxValueInRegion from '../utils/maxValueInRegion'
import LinearColorScale from '../utils/LinearColorScale'

function useChloropleth(width) {
  useEffect(() => {
    if (d3.select('g>path')) {
      const maxBusStops = maxValueInRegion(BusStops)
      const colorScale = LinearColorScale({
        svgWidth: width,
        maxValue: maxBusStops,
        svgSelector: 'svg',
        scaleWidth: 200,
        range: ['rgb(0,150,200)', 'rgb(0,0,100)'],
      })

      for (let region in BusStops) {
        d3.selectAll(`.${cleanClassAndID(region)}`)
          .attr('fill', () => {
            return colorScale(BusStops[region].length)
          })
          .attr('stroke', () => {
            return colorScale(BusStops[region].length)
          })
      }
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
