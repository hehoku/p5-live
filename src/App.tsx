import { ReactP5Wrapper } from '@p5-wrapper/react'
import Basic from './libs/basic'

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-md border-2 border-gray-200">
        <ReactP5Wrapper sketch={Basic} />
      </div>
    </div>
  )
}
