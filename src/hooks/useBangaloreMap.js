import { useEffect } from 'react'

import BangaloreRegionBoundaries from '../data/bangalore_region_boundaries.json'

import * as d3 from 'd3'
import cleanClassAndID from '../utils/cleanClassAndID'

export default function useBangaloreMap({ width, height, selector }) {
  useEffect(() => {
    const map = d3.select(selector)
    const projection = d3
      .geoMercator()
      .translate([width / 2, height / 2])
      .fitSize([width, height], BangaloreRegionBoundaries)

    const geoGenerator = d3.geoPath().projection(projection)

    map
      .append('g')
      .attr('id', 'bng-map')
      .selectAll('path')
      .data(BangaloreRegionBoundaries.features)
      .enter()
      .append('path')
      .attr('d', geoGenerator)
      .attr('id', (d) => cleanClassAndID(d.properties.WARD_NAME))
      .attr('class', (d) => cleanClassAndID(d.properties.ASS_CONST1))
      .append('title')
      .attr('x', (d) => projection([d.lon, d.lat])[0])
      .attr('y', (d) => projection([d.lon, d.lat])[1])
      .text((d) => `Region: ${d.properties.ASS_CONST1}`)
  }, [width, height, selector])
}
