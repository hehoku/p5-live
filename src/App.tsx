import * as p5 from 'p5'
import { ReactP5Wrapper, Sketch } from '@p5-wrapper/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).p5 = p5

const sketch: Sketch = (p5) => {
  p5.setup = () => p5.createCanvas(600, 500, p5.WEBGL)

  p5.draw = () => {
    p5.background(252, 247, 218)
    p5.normalMaterial()
  }
}

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-md border-2 border-gray-200">
        <ReactP5Wrapper sketch={sketch} />
      </div>
    </div>
  )
}
