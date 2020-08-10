import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'

import './Chloropleth.css'

import Modal from '../components/Modal'

import getContent from '../utils/getContent'

import useBangaloreMap from '../hooks/useBangaloreMap'
import useChloropleth from '../hooks/useChloropleth'

function Chloropleth() {
  const dimensions = {
    width: 800,
    height: 900,
  }
  const { width, height } = dimensions
  const [displayModal, setDisplayModal] = useState(false)
  const [modalContent, setModalContent] = useState({
    header: null,
    content: null,
  })

  useBangaloreMap({
    selector: 'svg#bangalore-map',
    width: width,
    height: height,
  })
  useChloropleth(width)
  useEffect(() => {
    d3.selectAll('path').on('click', function () {
      setModalContent(getContent(this))
      setDisplayModal(true)
    })
  }, [])
  return (
    <>
      {displayModal && (
        <Modal {...modalContent} setDisplayModal={setDisplayModal} />
      )}
      <h1>Distribution of bus stops in Bangalore</h1>
      <h2>Number of bus stops per region</h2>
      <div id="wrapper-box">
        <svg id="bangalore-map" viewBox={`0 0 ${width} ${height}`}></svg>
      </div>
    </>
  )
}

export default Chloropleth
