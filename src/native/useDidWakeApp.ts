import { AppState, AppStateStatus } from 'react-native'
import { useEffect } from 'react'

const useDidWakeApp = (callback: () => void): void => {
  let prevAppState = ''

  const onChange = (state: AppStateStatus) => {
    if (prevAppState === 'background' && state === 'active') {
      callback()
    }

    prevAppState = state
  }

  useEffect(() => {
    AppState.addEventListener('change', onChange)

    return () => AppState.removeEventListener('change', onChange)
  }, [])
}

export default useDidWakeApp
