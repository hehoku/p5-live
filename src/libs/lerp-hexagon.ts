import { Sketch } from '@p5-wrapper/react'

const LerpHexagon: Sketch = (p5) => {
  const w = 600
  const h = 500
  p5.setup = () => p5.createCanvas(w, h)

  p5.draw = () => {
    const dim = Math.min(w, h)
    p5.background(0)
    p5.noFill()
    p5.stroke(255)
    p5.strokeJoin(p5.MITER)

    const time = p5.millis() * 0.001

    // rings refers to the number of rings in the hexagon
    const rings = 8
    const sides = 6
    const maxRadius = dim * 0.4

    for (let i = 0; i < rings; i++) {
      const t = (i + 1) / rings
      const radius = t * maxRadius

      const maxThickness = (maxRadius / rings) * 1
      const minThickness = (maxRadius / rings) * 0.001

      const pingPong = Math.sin(t * 3.0 + time) * 0.5 + 0.5
      const thickness = p5.lerp(minThickness, maxThickness, pingPong)

      p5.strokeWeight(thickness)
      polygon(w / 2, h / 2, radius, sides, Math.PI / 2)
    }
  }

  function polygon(x: number, y: number, radius: number, sides = 3, angle = 0) {
    p5.beginShape()
    for (let i = 0; i < sides; i++) {
      const a = angle + Math.PI * 2 * (i / sides)
      const sx = x + Math.cos(a) * radius
      const sy = y + Math.sin(a) * radius
      p5.vertex(sx, sy)
    }
    p5.endShape(p5.CLOSE)
  }
}

export default LerpHexagon
