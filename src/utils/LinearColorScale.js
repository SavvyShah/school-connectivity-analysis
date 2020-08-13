import * as d3 from 'd3'

//makes a d3 linear color scale, return it and render at the top of selected svg
export default function LinearColorScale({
  svgWidth,
  scaleWidth,
  maxValue,
  range,
  textColor,
  svgSelector,
}) {
  const rectWidth = (scaleWidth && scaleWidth / 4) || 80
  const scaleRange = range || ['rgb(0,100,200)', 'rgb(0,0,100)']
  const colorScale = d3.scaleLinear().domain([0, maxValue]).range(scaleRange)

  const colorScaleGroup = d3
    .select(svgSelector || 'svg')
    .append('g')
    .attr('id', 'clr-sc-li')

  colorScaleGroup
    .selectAll('rect')
    .data([0, maxValue / 4, maxValue / 2, (3 * maxValue) / 4, maxValue])
    .enter()
    .append('rect')
    .attr('class', 'color-scale-rect')
    .attr('fill', (d) => colorScale(d))
    // start at center of svg
    .attr('x', (d, i) => rectWidth * i + svgWidth / 2)
    // have some margin on top of scale
    .attr('y', 10)
    .attr('width', rectWidth)
    .attr('height', 10)
  colorScaleGroup
    .selectAll('text')
    .data([0, maxValue / 4, maxValue / 2, (3 * maxValue) / 4, maxValue])
    .enter()
    .append('text')
    .attr('x', (d, i) => rectWidth * i + svgWidth / 2)
    // adjust the text to be below svg
    .attr('y', 33)
    .attr('fill', textColor || 'black')
    .text((d) => '|' + d)

  return colorScale
}
