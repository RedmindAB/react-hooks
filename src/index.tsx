// General
import useBigState from './general/useBigState'
import useDidUpdate from './general/useDidUpdate'
import useFetch, { setUseFetchDefaultRequestFn } from './general/useFetch'
import useToggle from './general/useToggle'

// Native
import useLayout from './native/useLayout'
import useContentSize from './native/useContentSize'
import useDidWakeApp from './native/useDidWakeApp'
import useAnimatedValue from './native/useAnimatedValue'

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
  useAnimatedValue,
  useDidWakeApp
}
