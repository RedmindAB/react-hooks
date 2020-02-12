// General
import useBigState from './general/useBigState'
import useDidUpdate from './general/useDidUpdate'
import useFetch, { setUseFetchDefaultRequestFn } from './general/useFetch'
import useToggle from './general/useToggle'

// Native
import useLayout from './native/useLayout'
import useContentSize from './native/useContentSize'
const useAnimatedValue = require('./native/useAnimatedValue')

// Web
import useInput from './web/useInput'

const config = {
  setUseFetchDefaultRequestFn
}

export {
  useBigState,
  useDidUpdate,
  useFetch,
  useToggle,
  config,
  useLayout,
  useContentSize,
  useInput,
  useAnimatedValue
}
