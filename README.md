This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### JSON Data

## bangalore_boundaries.json

```json
{
  "type": "GeometryCollection",
  "geometries": [{ "type": "MultiPolygon", "coordinates": [[[22, 232]]] }]
}
```

## bus_stops.json

```json
{
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },

  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Jayanagara 9th Block,JAYANAGARA 9TH BLOCK,BESIDE HOTEL SRI SAI",
        "lat": 12.919757,
        "lon": 77.592359,
        "value": 0.45
      },
      "geometry": {
        "type": "Point",
        "coordinates": [77.592358899399997, 12.9197565816]
      }
    }
  ]
}
```

## schools.json

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "geometry": {
        "type": "Point",
        "coordinates": [77.41892, 13.13065]
      },
      "type": "Feature",
      "properties": {
        "id": 33246,
        "name": "GKLPS BOMMASHETTIHALLI",
        "address_full": "Huskuru Post, Dasanpura Hobli, N-4, Bomshettyhalli, 562123",
        "dise_info": "29280705601",
        "type": {
          "id": 1,
          "name": "Primary School"
        }
      }
    }
  ]
}
```

## routes.json

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.5923588994416, 12.9197565816171],
          [77.5933845451659, 12.9226893214618],
          [77.5887716805949, 12.9231859777075],
          [77.5876041867249, 12.9279596029171],
          [77.58420959115, 12.9284826437007],
          [77.5839063618, 12.9317783285],
          [77.5839236286, 12.9361068271],
          [77.5766457058, 12.9366643075],
          [77.5721701369447, 12.9367205700067],
          [77.5721522514, 12.9395624343],
          [77.57358, 12.94189],
          [77.5707005896, 12.9457424115],
          [77.567561017579, 12.94914747783],
          [77.5674634986, 12.9518947285],
          [77.5682954863, 12.957194522],
          [77.57402561, 12.95850855],
          [77.57527904, 12.96161187],
          [77.56843, 12.96366],
          [77.5680068206731, 12.9681187418378],
          [77.57074, 12.97736],
          [77.574481312945, 12.9817447954723],
          [77.572098665973, 12.9899747663903],
          [77.5713099939793, 12.9978901319732],
          [77.57128, 12.99966],
          [77.5711547211, 13.005030714],
          [77.5710476004, 13.0090816878],
          [77.56289701, 13.01565694],
          [77.55707759428026, 13.017420746122461],
          [77.5532, 13.01856],
          [77.55029, 13.02311]
        ]
      },
      "type": "Feature",
      "properties": {
        "origin": "Jayanagara 9th Block",
        "distance": 19.6,
        "last_departure": "17:45",
        "first_arrival": "08:50",
        "route": "1",
        "destination": "Yeshwanathapura new railway station",
        "first_departure": "07:35",
        "last_arrival": "19:00",
        "duration": 1.25,
        "speed": 15.680000000000001,
        "trips": 23
      }
    }
  ]
}
```
