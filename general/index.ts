import useBigState from './useBigState'
import useConnect from './useConnect'
import useDidUpdate from './useDidUpdate'
import useFetch, { setUseFetchDefaultRequestFn } from './useFetch'
import useToggle from './useToggle'

const config = {
  setUseFetchDefaultRequestFn
}

export { useBigState, useConnect, useDidUpdate, useFetch, useToggle, config }
