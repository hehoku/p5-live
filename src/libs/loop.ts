import { Sketch } from '@p5-wrapper/react'

const Loop: Sketch = (p5) => {
  const w = 600
  const h = 500
  p5.setup = () => p5.createCanvas(w, h)

  p5.draw = () => {
    p5.background(0)
    p5.translate(w / 2, h / 2)
    p5.noFill()
    p5.stroke(255)

    const minDim = p5.min(w, h)
    const time = p5.millis() / 1000

    const duration = 5
    const playhead = time / duration
    const anim = p5.sin(playhead * p5.TWO_PI) * 0.5 + 0.6
    const thickness = minDim * 0.1 * anim
    p5.strokeWeight(thickness)
    p5.circle(0, 0, 250)
  }
}

export default Loop
