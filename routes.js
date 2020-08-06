const BangaloreRoutes = require('./public/data/routes.json')
const BangaloreSchools = require('./public/data/schools.json')
const BangaloreBusStops = require('./public/data/bus_stops.json')
const BangaloreBoundaries = require('./public/data/bangalore_boundaries.json')

exports.load = function (app) {
  app.get('/bangalore/boundaries', function (req, res) {
    res.json(BangaloreBoundaries)
  })
  app.get('/bangalore/bus_stops', function (req, res) {
    res.json(BangaloreBusStops)
  })
  app.get('/bangalore/routes', function (req, res) {
    res.json(BangaloreRoutes)
  })
  app.get('/bangalore/schools', function (req, res) {
    res.json(BangaloreSchools)
  })
}
