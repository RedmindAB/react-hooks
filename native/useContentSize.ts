import { useState } from 'react'

export type ContentSize = {
  height: number
  width: number
}

const useContentSize = (): [
  ContentSize,
  { onContentSizeChange: (width: number, height: number) => void }
] => {
  const [contentSize, setContentSize] = useState<ContentSize>({
    height: 0,
    width: 0
  })

  const bindContentSize = {
    onContentSizeChange: (width: number, height: number) => setContentSize({ height, width })
  }

  return [contentSize, bindContentSize]
}

export default useContentSize
