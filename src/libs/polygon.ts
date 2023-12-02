import { Sketch } from '@p5-wrapper/react'

const Polygon: Sketch = (p5) => {
  const w = 600
  const h = 500
  p5.setup = () => p5.createCanvas(w, h)

  p5.draw = () => {
    const dim = Math.min(w, h)
    p5.background(0)

    p5.noFill()
    p5.stroke(255)
    p5.strokeJoin(p5.BEVEL)
    p5.strokeWeight(dim * 0.015)

    const time = p5.millis() * 0.001
    const pingPong = Math.sin(time * 0.75 - Math.PI * 0.5) * 0.5 + 0.5
    const points = p5.lerp(2, 100, Math.pow(pingPong, 2.5))

    const radius = dim / 3
    const angle = pingPong * Math.PI * 2
    polygon(w / 2, h / 2, radius, points, angle)
  }

  /**
   * @param x pointX
   * @param y pointY
   * @param radius radius
   * @param sides sides
   * @param angle angle
   */
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

export default Polygon
