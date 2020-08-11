import React, { useState } from 'react'

import styles from './App.module.css'

import Chloropleth from './pages/Chloropleth'
import BusRoutes from './pages/BusRoutes'

import useSchools from './hooks/useSchools'
import useBusStops from './hooks/useBusStops'

const pages = {
  chloropleth: 'chloropleth',
  busRoutes: 'busRoutes',
}

function App() {
  const [showPage, setShowPage] = useState(pages.chloropleth)
  const [showMarks, setShowSchool] = useState({ school: false, busStop: false })
  useSchools({
    showSchool: showMarks.school,
    height: 850,
    width: 800,
    selector: 'svg',
  })
  useBusStops({
    showBusStops: showMarks.busStop,
    height: 850,
    width: 800,
    selector: 'svg',
  })
  const handleShowPage = (page) => {
    setShowSchool({ school: false, busStop: false })
    setShowPage(page)
  }
  return (
    <>
      <div className={styles.row}>
        <button
          className={styles.primaryBtn}
          onClick={() => handleShowPage(pages.chloropleth)}
        >
          Chloropleth
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => handleShowPage(pages.busRoutes)}
        >
          Bus Routes
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() =>
            setShowSchool({ ...showMarks, school: !showMarks.school })
          }
        >
          Toggle Schools
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() =>
            setShowSchool({ ...showMarks, busStop: !showMarks.busStop })
          }
        >
          Toggle Bus Stops
        </button>
      </div>
      {showPage === pages.chloropleth && <Chloropleth />}
      {showPage === pages.busRoutes && <BusRoutes />}
    </>
  )
}

export default App
