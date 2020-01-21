import { useState, useEffect } from 'react'

let defaultRequestFn = (url: string) => fetch(url).then(res => res.json())

export const setUseFetchDefaultRequestFn = (fn: (url: string) => any) =>
  (defaultRequestFn = fn)

export default function useFetch<T>(
  url: string,
  requestFnOverride?: (url: string) => Promise<T>,
  initialState = []
) {
  const [data, setData] = useState(initialState)
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)

  const requestFn = requestFnOverride || defaultRequestFn

  useEffect(() => {
    setPending(true)

    requestFn(url)
      .then(({ data }) => {
        setData(data)
        setPending(false)
        setError(null)
      })
      .catch(error => {
        setError(error)
        setPending(false)
      })
  }, [url])

  return { data, error, pending }
}
