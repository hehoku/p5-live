import * as p5 from 'p5'
import { ReactP5Wrapper } from '@p5-wrapper/react'
import Basic from './libs/basic'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).p5 = p5

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-md border-2 border-gray-200">
        <ReactP5Wrapper sketch={Basic} />
      </div>
    </div>
  )
}
