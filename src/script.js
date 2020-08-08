const fs = require('fs')
const BangaloreBusStops = require('./data/bus_stops.json')

const BusStopsCoords = []

BangaloreBusStops.features.forEach((feature) => {
  BusStopsCoords.push({
    0: feature.geometry.coordinates[0],
    1: feature.geometry.coordinates[1],
  })
})
fs.writeFileSync('./data/bus_stops_coords.json', JSON.stringify(BusStopsCoords))
