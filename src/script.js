const fs = require('fs')
const BangaloreRegionBoundaries = require('./data/schools_in_region.json')

// const BangaloreRegions = {}

// BangaloreRegionBoundaries.features.forEach((feature) => {
//   BangaloreRegions[feature.properties.ASS_CONST1] = {}
// })
// fs.writeFileSync(
//   './data/schools_in_region.json',
//   JSON.stringify(BangaloreRegions)
// )
const Regions = {}

BangaloreRegionBoundaries.forEach((school) => {
  Regions[school] = {}
})

fs.writeFileSync('./data/schools_in_region.json', JSON.stringify(Regions))

const RegexStr = /(B.T.M. Layout)|(Bangalore South)|(Basavanagudi)|(Bommana Halli)|(Byatarayanapura)|(C.V. Ramannagar (SC))|(Chamarajpet)|(Chickpet)|(Dasarahalli)|(Gandhi Nagar)|(Govindaraja Nagar)|(Hebbal)|(Jaya Nagar)|(K.R. Puram)|(Mahadevapura)|(Mahalakshmi Layout)|(Malleswaram)|(Padmanaba Nagar)|(Pulakeshi Nagar (SC))|(Rajaji Nagar)|(Rajarajeswari Nagar)|(Sarvagna Nagar)|(Shanthi Nagar)|(Shivaji Nagar)|(Vijaya Nagar)|(Yelahanka)|(Yeshwantpura)/
