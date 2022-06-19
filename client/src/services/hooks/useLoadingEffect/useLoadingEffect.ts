import { loaderSelector } from 'containers/App/store/reducers/selectors'
import { useSelector } from 'react-redux'

const useLoadingEffect = (value: string): boolean => {
  const loaderState = useSelector(loaderSelector)

  const loading = loaderState[value]

  return loading
}

export default useLoadingEffect
