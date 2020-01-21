import { useState } from 'react'

export default function useInput<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)

  return {
    value,
    setValue,
    bind: {
      value,
      onChange(event: any): void {
        setValue(event.target.value as T)
      }
    }
  }
}
