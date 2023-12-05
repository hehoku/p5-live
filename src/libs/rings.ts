import { Sketch } from '@p5-wrapper/react'

interface Ring {
  spinSpeed: number
  diameter: number
  arcLength: number
  arcAngle: number
}

const Rings: Sketch = (p5) => {
  const w = 600
  const h = 500
  const rings: Ring[] = []
  p5.setup = () => {
    p5.createCanvas(w, h)

    const count = Math.floor(p5.random(10, 20))

    for (let i = 0; i < count; i++) {
      const diameter = (i + 1) / count

      const arcLength = p5.random(p5.PI * 0.05, p5.PI * 2)
      const arcAngle = p5.random(-p5.PI * 2, p5.PI * 2)
      const spinSpeed = p5.random(-1.5, 1.5)
      rings.push({
        spinSpeed,
        diameter,
        arcLength,
        arcAngle,
      })
    }
  }

  p5.draw = () => {
    const dim = Math.min(w, h)
    p5.background(0)
    p5.noFill()
    p5.stroke(255)
    p5.strokeWeight(dim * 0.015)
    p5.strokeCap(p5.ROUND)

    let d = dim
    d -= d * 0.25

    const time = p5.millis() / 1000
    for (let i = 0; i < rings.length; i++) {
      const { diameter, arcLength, arcAngle, spinSpeed } = rings[i]
      const spin = time * spinSpeed

      p5.arc(
        w / 2,
        h / 2,
        diameter * d,
        diameter * d,
        spin + arcAngle,
        spin + arcAngle + Math.PI * arcLength,
      )
    }
  }
}

export default Rings
