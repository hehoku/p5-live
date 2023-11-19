import * as p5Type from 'p5'
import { Sketch } from '@p5-wrapper/react'

const Basic: Sketch = (p5: p5Type) => {
  const w = 600
  const h = 500
  p5.setup = () => p5.createCanvas(w, h, p5.WEBGL)

  p5.draw = () => {
    p5.background(0, 0, 0)
    p5.fill(255, 255, 255)

    drawCircle(p5, 0, 0, 100, 100)
  }
}

function drawCircle(
  p5: p5Type,
  centerX: number,
  centerY: number,
  radius: number,
  numPoints: number,
) {
  const angleStep = p5.TWO_PI / numPoints

  p5.fill(255, 255, 255)
  p5.beginShape()
  for (let i = 0; i < numPoints; i++) {
    const x = centerX + radius * p5.cos(i * angleStep)
    const y = centerY + radius * p5.sin(i * angleStep)
    p5.curveVertex(x, y)
  }
  p5.endShape(p5.CLOSE)
}

export default Basic
