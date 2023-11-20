import { P5CanvasInstance, Sketch, SketchProps } from '@p5-wrapper/react'

const Shape: Sketch = (p5) => {
  const w = 600
  const h = 500
  p5.setup = () => p5.createCanvas(w, h, p5.WEBGL)

  p5.draw = () => {
    p5.background(0, 0, 0)
    p5.fill(0, 0, 0)

    p5.stroke(255, 255, 255)
    p5.strokeWeight(3)

    p5.rect(-100, -100, 200, 200)
    drawCircle(p5, 0, 0, 100, 100)
    p5.triangle(0, -100, -100, 100, 100, 100)
  }
}

function drawCircle(
  p5: P5CanvasInstance<SketchProps>,
  centerX: number,
  centerY: number,
  radius: number,
  numPoints: number,
) {
  const angleStep = p5.TWO_PI / numPoints

  p5.beginShape()
  for (let i = 0; i < numPoints; i++) {
    const x = centerX + radius * p5.cos(i * angleStep)
    const y = centerY + radius * p5.sin(i * angleStep)
    p5.curveVertex(x, y)
  }
  p5.endShape(p5.CLOSE)
}

export default Shape
