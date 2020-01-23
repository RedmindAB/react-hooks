import { useToggle } from '../'
import { renderHook, act } from '@testing-library/react-hooks'

describe('useToggle', () => {
  it('toggles state', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current[0]).toBe(false)

    act(() => {
      const [_, toggleValue] = result.current
      toggleValue()
    })

    expect(result.current[0]).toBe(true)

    act(() => {
      const [_, toggleValue] = result.current
      toggleValue()
    })
    expect(result.current[0]).toBe(false)
  })

  it('accepts initial boolean value', () => {
    const { result } = renderHook(() => useToggle(true))

    expect(result.current[0]).toBe(true)
  })
})
