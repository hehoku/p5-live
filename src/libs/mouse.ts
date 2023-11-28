import { Sketch } from '@p5-wrapper/react'

const Mouse: Sketch = (p5) => {
  const w = 600
  const h = 500

  let px: number
  let py: number
  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.cursor(p5.CROSS)

    px = w / 2
    py = h / 2
  }

  p5.draw = () => {
    p5.background(0)
    p5.noFill()
    p5.stroke(255)
    p5.strokeWeight(8)

    p5.circle(p5.mouseX, p5.mouseY, 150)
    const dt = p5.deltaTime / 1000
    const power = 5
    px = spring(px, p5.mouseX, power, dt)
    py = spring(py, p5.mouseY, power, dt)

    p5.fill(255)
    p5.circle(px, py, 100)
  }
  // Springs A toward B with a power, accepting deltaTime
  function spring(a: number, b: number, power: number, dt: number) {
    return p5.lerp(a, b, 1 - Math.exp(-power * dt))
  }
}


export default Mouse
