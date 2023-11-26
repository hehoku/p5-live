import { Sketch } from '@p5-wrapper/react'

const TrigonometryMotion: Sketch = (p5) => {
  const w = 600
  const h = 500

  let angle = 0
  const radius = 200
  // Create a new canvas to the browser size
  p5.setup = () => {
    p5.createCanvas(w, h)

    // We set the background to black when the canvas is setup
    p5.background(0)
  }

  // On window resize, update the canvas size
  p5.windowResized = () => {
    p5.resizeCanvas(w, h)

    // We also set the background to black when the canvas is resized
    // This is because resizing the canvas clears it to white
    p5.background(0)
  }

  // Render loop that draws shapes with p5
  p5.draw = () => {
    // This is a trick to create a motion blur,
    // Instead of clearing each frame with pure black,
    // we use black with (N/255)% opacity
    p5.background(0, 0, 0, 20)

    const dim = Math.min(p5.width, p5.height)
    // Disable fill and set up a stroke
    p5.noFill()
    p5.strokeWeight(dim * 0.015)
    p5.stroke(255)

    p5.translate(p5.width / 2, p5.height / 2)

    const x = p5.cos(angle) * radius
    const y = p5.sin(angle) * radius

    p5.circle(x, y, 50)
    angle += 0.025
  }
}

export default TrigonometryMotion
