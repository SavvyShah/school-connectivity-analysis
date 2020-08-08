const fs = require('fs')
const BangaloreBusStops = require('./data/bus_stops.json')

const BusStops = {
  propertyName: 'Bangalore Bus stop coordinates',
  coordinates: [],
}

BangaloreBusStops.features.forEach((feature) => {
  BusStops.coordinates.push(feature.geometry.coordinates)
})
fs.writeFileSync('./data/bus_stops_coords.json', JSON.stringify(BusStops))
