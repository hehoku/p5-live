import { Sketch } from '@p5-wrapper/react'

const RandomRects: Sketch = (p5) => {
  const w = 600
  const h = 500
  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.noLoop()
  }

  p5.draw = () => {
    p5.background(0)
    p5.fill(255)
    p5.translate(w / 2, h / 2)

    for (let i = 0; i < 50; i++) {
      drawRect(
        p5.random(-w / 2, w / 2),
        p5.random(-h / 2, h / 2),
        p5.random(10, 100),
        p5.random(10, 100),
      )
    }
  }

  /**
   * @param x coordinate of the rectangle
   * @param y coordinate of the rectangle
   * @param w width
   * @param h height
   */
  function drawRect(x: number, y: number, w: number, h: number) {
    p5.noFill()
    p5.strokeWeight(2)
    p5.stroke(255)
    p5.rect(x, y, w, h)
  }
}

export default RandomRects
