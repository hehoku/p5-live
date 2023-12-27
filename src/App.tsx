import { ReactP5Wrapper, Sketch } from '@p5-wrapper/react'
import { useEffect, useState } from 'react'

import AnimGrid from './libs/animating-grid'
import Basic from './libs/basic'
import Blend from './libs/blend'
import Lerp from './libs/lerp'
import LerpHexagon from './libs/lerp-hexagon'
import Loop from './libs/loop'
import Mouse from './libs/mouse'
import Polygon from './libs/polygon'
import RandomRects from './libs/random-rects'
import Repeat from './libs/repeat'
import Rings from './libs/rings'
import Rotate from './libs/rotate'
import Shape from './libs/shape'
import TrigonometryMotion from './libs/trigonometry-motion'

interface FileMap {
  [key: string]: Sketch
}

const fileMap: FileMap = {
  Basic,
  Shape,
  Blend,
  Loop,
  Rotate,
  Lerp,
  Repeat,
  TrigonometryMotion,
  Mouse,
  RandomRects,
  Polygon,
  LerpHexagon,
  Rings,
  AnimGrid,
}

export default function App() {
  const [currentSketch, setCurrentSketch] = useState<string>(
    window.location.hash.slice(1) ||
      Object.keys(fileMap)[Object.keys(fileMap).length - 1],
  )
  const [demo, setDemo] = useState<Sketch>(() => fileMap[currentSketch])

  useEffect(() => {
    const handleHashChange = () => {
      const sketchName = window.location.hash.slice(1)
      if (sketchName in fileMap) {
        setCurrentSketch(sketchName)
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    setDemo(() => fileMap[currentSketch])
  }, [currentSketch])

  const handleClick = (fileName: string) => {
    window.location.hash = fileName
  }

  return (
    <div className="mx-auto flex min-h-screen w-2/3 flex-row items-center justify-center gap-x-10 px-10">
      <div className="flex flex-col">
        {Object.keys(fileMap).map((fileName) => (
          <a
            key={fileName}
            href={`#${fileName}`}
            onClick={() => handleClick(fileName)}
            className={`mb-4 font-bold hover:underline ${
              currentSketch === fileName ? 'text-green-500 underline' : ''
            }`}
          >
            {fileName}
          </a>
        ))}
      </div>
      <div className="rounded-md border-2 border-gray-200">
        <ReactP5Wrapper sketch={demo} />
      </div>
    </div>
  )
}
