import { Sketch } from '@p5-wrapper/react'

const Basic: Sketch = (p5) => {
  const w = 600
  const h = 500
  p5.setup = () => p5.createCanvas(w, h)

  p5.draw = () => {
    p5.background(0, 0, 0)
    p5.fill(255, 255, 255)
    p5.translate(w / 2, h / 2)
    p5.circle(0, 0, 250)
  }
}

export default Basic
