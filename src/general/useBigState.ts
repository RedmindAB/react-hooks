import { useState } from 'react'

export default function useBigState<State>(initalState: State) {
  const [state, replaceState] = useState<State>(initalState)

  const setState = (obj: Partial<State>) => {
    const newState = { ...state }

    for (const key in obj) {
      // @ts-ignore
      newState[key] = obj[key]
    }

    replaceState(newState)
  }

  return [state, setState] as [State, typeof setState]
}
