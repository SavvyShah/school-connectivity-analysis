import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'

import './App.css'

import BangaloreRegionBoundaries from './data/bangalore_region_boundaries.json'
import BangaloreBoundaries from './data/bangalore_boundaries.json'

function App() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 1200 })
  const { width, height } = dimensions

  useEffect(() => {
    var projection = d3
      .geoMercator()
      .translate([width / 2, height / 2])
      // scale to zoom on the center
      .scale(Math.pow(3, 11))
      //coordinates of bangalore
      .center([77.624566, 12.981599])

    var geoGenerator = d3.geoPath().projection(projection)

    // Join the FeatureCollection's features array to path elements
    var map = d3
      .select('svg>g#bangalore-map')
      .selectAll('path')
      .data(BangaloreBoundaries.features)

    // Create path elements and update the d attribute using the geo generator
    map.enter().append('path').attr('d', geoGenerator)
  }, [width, height])
  return (
    <>
      <svg width={width} height={height}>
        <g id="bangalore-map"></g>
      </svg>
      <svg width={width} height={height}>
        <g id="bangalore-region-boundaries"></g>
      </svg>
    </>
  )
}

export default App
