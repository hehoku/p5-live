import { Sketch } from '@p5-wrapper/react'

const Lerp: Sketch = (p5) => {
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

    const dim = p5.min(w, h)
    const size = dim * 0.2

    p5.translate(w / 2, h / 2)

    const x1 = w * -0.25
    const x2 = w * 0.25

    const time = p5.millis() / 1000
    const duration = 4
    const playhead = (time / duration) % 1

    let t0 = p5.sin(playhead * p5.PI * 2)
    // map t0 from [-1, 1] to [0, 1] for lerp
    t0 = t0 * 0.5 + 0.5

    const x = p5.lerp(x1, x2, t0)

    p5.circle(x, 0, size)
  }
}

export default Lerp
