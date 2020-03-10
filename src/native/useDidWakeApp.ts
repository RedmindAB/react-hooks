import { AppState, AppStateStatus } from 'react-native'
import { useEffect } from 'react'

export type UseDidWakeAppCallbackProps = {
  latestActivityDate: Date
  minutesSinceLastActivity: number
}

const useDidWakeApp = (
  callback: (props: UseDidWakeAppCallbackProps) => void
): void => {
  let prevAppState = ''
  let latestActivity = new Date()

  const onChange = (state: AppStateStatus) => {
    if (prevAppState === 'background' && state === 'active') {
      const latestActivityDate = new Date(latestActivity)
      const minutesSinceLastActivity = Math.round(
        (Date.now() - latestActivityDate.getTime()) / 1000 / 60
      )

      callback({ latestActivityDate, minutesSinceLastActivity })

      latestActivity = new Date()
    }

    prevAppState = state
  }

  useEffect(() => {
    AppState.addEventListener('change', onChange)

    return () => AppState.removeEventListener('change', onChange)
  }, [])
}

export default useDidWakeApp
