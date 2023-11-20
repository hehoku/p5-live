import { ReactP5Wrapper, Sketch } from '@p5-wrapper/react'
import { useState } from 'react'

import Basic from './libs/basic'
import Shape from './libs/shape'

interface FileMap {
  [key: string]: Sketch
}

const fileMap: FileMap = {
  Basic: Basic,
  Shape: Shape,
}

export default function App() {
  const [demo, setDemo] = useState(() => Shape)

  const handleClick = (file: string) => {
    const selectedFile = fileMap[file]
    if (selectedFile) {
      setDemo(() => selectedFile)
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-2/3 flex-row items-center justify-center gap-x-10 px-10">
      <div className="flex flex-col">
        {Object.keys(fileMap).map((fileName) => (
          <a
            key={fileName}
            href={`#${fileName}`}
            onClick={() => handleClick(fileName)}
            className='font-bold hover:underline active:text-blue-500'
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
