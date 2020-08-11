import { useEffect } from 'react'

import Schools from '../data/schools.json'
import BangaloreRegionBoundaries from '../data/bangalore_region_boundaries.json'

import * as d3 from 'd3'

// selector: CSS selector selecting Svg element or any
// width: width of Svg element or selected element using selector
// height: height of the same
export default function useSchools({ width, height, selector, showSchool }) {
  useEffect(() => {
    if (showSchool) {
      // Join the FeatureCollection's features array to path elements
      const map = d3.select(selector)
      const projection = d3
        .geoMercator()
        .translate([width / 2, height / 2])
        // scale to zoom on the center
        .fitSize([width, height], BangaloreRegionBoundaries)

      const geoGenerator = d3.geoPath().projection(projection)

      //Generate map below
      // Create path elements and update the d attribute using the geo generator
      map
        .append('g')
        .attr('id', 'school-g')
        .selectAll('path')
        .data(Schools.features)
        .enter()
        .append('path')
        .attr('d', geoGenerator)
        .append('title')
        .attr('x', (d) => projection([d.lon, d.lat])[0])
        .attr('y', (d) => projection([d.lon, d.lat])[1])
        .text((d) => `School: ${d.properties.address_full}`)

      return () => {
        map.select('g#school-g').remove()
      }
    }
  }, [width, height, selector, showSchool])
}
