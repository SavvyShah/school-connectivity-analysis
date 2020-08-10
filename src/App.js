import React from 'react'

import './App.css'

import useBangaloreMap from './hooks/useBangaloreMap'
import useChloropleth from './hooks/useChloropleth'

function App() {
  const dimensions = {
    width: 850,
    height: 800,
  }
  const { width, height } = dimensions

  useBangaloreMap({
    selector: 'svg#bangalore-map',
    width: width,
    height: height,
  })
  useChloropleth(width)
  return (
    <>
      <h1>Distribution of bus stops in Bangalore</h1>
      <h2>Number of bus stops per region</h2>
      <svg id="bangalore-map" viewBox={`0 0 ${width} ${height}`}></svg>
    </>
  )
}

export default App
