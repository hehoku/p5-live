import { Sketch } from '@p5-wrapper/react'

const AnimGrid: Sketch = (p5) => {
  const w = 600
  const h = 500
  p5.setup = () => p5.createCanvas(w, h)

  p5.draw = () => {
    const dim = Math.max(w, h)

    p5.background(0)
    p5.noFill()
    p5.stroke(255)
    p5.strokeCap(p5.ROUND)
    p5.strokeWeight(dim * 0.005)

    const gridSize = 10
    const margin = dim * 0.1
    const innerWidth = w - margin * 2
    const cellSize = innerWidth / gridSize

    const time = p5.millis() * 0.001

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const u = gridSize <= 1 ? 0.5 : x / (gridSize - 1)
        const v = gridSize <= 1 ? 0.5 : y / (gridSize - 1)

        const px = p5.lerp(margin, w - margin, u)
        const py = p5.lerp(margin, h - margin, v)

        const rotation = p5.sin(time + u * p5.PI * 0.25) * p5.PI
        const lineSize = p5.sin(time + v * p5.PI * 0.25) * 0.25 + 0.25

        segment(px, py, cellSize * lineSize, rotation)
      }
    }
  }

  function segment(x: number, y: number, length: number, angle = 0) {
    const r = length / 2
    const u = Math.cos(angle)
    const v = Math.sin(angle)
    p5.line(x - u * r, y - v * r, x + u * r, y + v * r)
  }
}

export default AnimGrid
