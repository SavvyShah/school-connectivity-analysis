export default function typeCoords(d, projection) {
  const p = projection(d)
  d[0] = p[0]
  d[1] = p[1]
  return d
}
