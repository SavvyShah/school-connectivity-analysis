import React from 'react'

import BusStopsInRegion from '../data/bus_stops_in_region.json'

export default function getContent(ElementNode) {
  const { WARD_NAME, ASS_CONST1 } = ElementNode.__data__.properties
  const D3DataProps = ElementNode.__data__.properties
  const header = `${WARD_NAME} (${ASS_CONST1})`
  return {
    header,
    content: (
      <>
        <p>
          Bus-Stops({ASS_CONST1}):
          {BusStopsInRegion[ASS_CONST1].length}
        </p>
        <p>Area(in sq. km): {D3DataProps.AREA_SQ_KM}</p>
        <p>Population: {D3DataProps.POP_TOTAL}</p>
      </>
    ),
  }
}
