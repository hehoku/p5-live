import { Sketch } from '@p5-wrapper/react'

const Blend: Sketch = (p5) => {
  const w = 600
  const h = 500
  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.noLoop()
  }

  p5.draw = () => {
    // Black background
    p5.background(0)

    // Set foreground as white
    p5.fill(255)

    // Set x-or / difference blend mode
    p5.blendMode(p5.DIFFERENCE)

    // Disable stroke
    p5.noStroke()

    // Center of screen
    const x = p5.width / 2
    const y = p5.height / 2

    // Fraction of screen dim
    const dim = p5.min(p5.width, p5.height)
    const size = dim * 0.5

    // Make a rectangle centred on the screen
    p5.rectMode(p5.CENTER)
    p5.rect(x, y, size, size)

    // Create a circle slightly offset down and right
    p5.push()
    p5.translate(size / 4, size / 4)
    p5.ellipse(x, y, size, size)
    p5.pop()

    // Create a triangle slightly offset up and left
    p5.push()
    p5.translate(-size / 4, -size / 4)
    p5.triangle(
      x,
      y - size / 2,
      x + size / 2,
      y + size / 2,
      x - size / 2,
      y + size / 2,
    )
    p5.pop()
  }
}

export default Blend
