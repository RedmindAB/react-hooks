import useBigState from './useBigState'
import useDidUpdate from './useDidUpdate'
import useFetch, { setUseFetchDefaultRequestFn } from './useFetch'
import useToggle from './useToggle'

const config = {
  setUseFetchDefaultRequestFn
}

export { useBigState, useDidUpdate, useFetch, useToggle, config }
