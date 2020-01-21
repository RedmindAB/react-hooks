import { useState } from 'react'

const useToggle = (initialValue = false): [boolean, (props?: any) => void] => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = () => setValue(!value)

  return [value, toggleValue]
}

export default useToggle
