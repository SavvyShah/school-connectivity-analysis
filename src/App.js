import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'

import './App.css'

import useBangaloreMap from './hooks/useBangaloreMap'

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

  return (
    <>
      <svg id="bangalore-map" width={width} height={height}></svg>
    </>
  )
}

export default App
