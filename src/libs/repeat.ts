import { Sketch } from '@p5-wrapper/react'

const Repeat: Sketch = (p5) => {
  const canvasWidth = 600
  const canvasHeight = 500
  const padding = 50
  const circleDiameter = 100
  const circleRadius = circleDiameter / 2

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight)
  }

  p5.draw = () => {
    p5.background(0)
    p5.fill(255)

    const totalCircles = Math.floor(
      (canvasWidth - padding * 2) / circleDiameter,
    )

    for (let i = 0; i < totalCircles; i++) {
      const x = padding + circleRadius + circleDiameter * i
      const y = canvasHeight / 2
      p5.circle(x, y, circleDiameter)
    }
  }
}

export default Repeat
