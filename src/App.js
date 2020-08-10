import React, { useState } from 'react'

import styles from './App.module.css'

import Chloropleth from './pages/Chloropleth'
import BusRoutes from './pages/BusRoutes'
import useSchools from './hooks/useSchools'

const pages = {
  chloropleth: 'chloropleth',
  busRoutes: 'busRoutes',
}

function App() {
  const [showPage, setShowPage] = useState(pages.chloropleth)
  const [showSchool, setShowSchool] = useState(false)
  useSchools({
    showSchool,
    height: 850,
    width: 800,
    selector: 'svg',
  })
  const handleShowPage = (page) => {
    setShowSchool(false)
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
          onClick={() => setShowSchool(!showSchool)}
        >
          Toggle Schools
        </button>
      </div>
      {showPage === pages.chloropleth && <Chloropleth />}
      {showPage === pages.busRoutes && <BusRoutes />}
    </>
  )
}

export default App
