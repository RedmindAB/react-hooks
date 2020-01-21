import React, { useEffect } from 'react'
import { useBigState } from 'react-hooks'
import { useInput } from 'react-hooks/web'

const App = () => {
  const { value, bind } = useInput()
  const [state, setState] = useBigState({
    fName: 'John',
    lName: 'Doe'
  })

  useEffect(() => {
    setTimeout(() => {
      setState({ fName: 'Doe', lName: 'John' })
    }, 2000)
  }, [])

  return (
    <div>
      <p>{value}</p>
      <input {...bind} />
      <p>{state.fName}</p>
      <p>{state.lName}</p>
    </div>
  )
}
export default App
