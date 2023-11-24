import { Sketch } from '@p5-wrapper/react'

const Rotate: Sketch = (p5) => {
  const w = 600
  const h = 500

  p5.setup = () => {
    p5.createCanvas(w, h)
  }

  p5.draw = () => {
    p5.background(0)
    p5.noFill()
    p5.stroke(255)
    p5.strokeWeight(4)

    const x = w / 2
    const y = h / 2
    const dim = p5.min(w, h)
    const size = dim * 0.5

    const time = p5.millis() / 1000

    p5.translate(x, y)
    p5.rectMode(p5.CENTER)
    p5.rotate(time * 0.4)
    p5.rect(0, 0, size, size)
  }
}

export default Rotate
