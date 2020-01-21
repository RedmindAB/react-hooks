import { useRef, useEffect } from 'react'

const useDidUpdate = (callback: () => void, deps?: any[]) => {
  const mountRef = useRef(false)

  useEffect(() => {
    if (mountRef.current) {
      return callback()
    } else {
      mountRef.current = true
    }
  }, deps)
}

export default useDidUpdate
