import { renderHook, act } from '@testing-library/react-hooks'
import { useBigState } from '..'

describe('useBigState', () => {
  it('updates property', () => {
    const { result } = renderHook(() => useBigState({ tests: 0 }))

    expect(result.current[0].tests).toBe(0)

    act(() => {
      const [_, setState] = result.current
      setState({ tests: 1 })
    })

    expect(result.current[0].tests).toBe(1)
  })

  it('does not override other properties', () => {
    const { result } = renderHook(() =>
      useBigState({ fName: 'John', lName: 'Doe' })
    )

    expect(result.current[0].fName).toBe('John')

    act(() => {
      const [_, setState] = result.current
      setState({ lName: 'Not-Doe' })
    })

    expect(result.current[0].fName).toBe('John')
  })
})
