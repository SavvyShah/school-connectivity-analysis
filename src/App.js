import React, { useState } from 'react'

import styles from './App.module.css'

import Chloropleth from './pages/Chloropleth'
import BusRoutes from './pages/BusRoutes'

const pages = {
  chloropleth: 'chloropleth',
  busRoutes: 'busRoutes',
}

function App() {
  const [showPage, setShowPage] = useState(pages.chloropleth)
  return (
    <>
      <div className={styles.row}>
        <button
          className={styles.primaryBtn}
          onClick={() => setShowPage(pages.chloropleth)}
        >
          Chloropleth
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => setShowPage(pages.busRoutes)}
        >
          Bus Routes
        </button>
      </div>
      {showPage === pages.chloropleth && <Chloropleth />}
      {showPage === pages.busRoutes && <BusRoutes />}
    </>
  )
}

export default App
