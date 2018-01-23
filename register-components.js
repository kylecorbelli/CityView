// @flow

import { Navigation } from 'react-native-navigation'
import CitiesListScreen from './src/containers/CitiesListScreen'
import CityDetailScreen from './src/containers/CityDetailScreen'
import CitiesMapScreen from './src/containers/CitiesMapScreen'

const components = {
  'CitiesListScreen': CitiesListScreen,
  'CitiesMapScreen': CitiesMapScreen,
  'CityDetailScreen': CityDetailScreen,
}

const registerComponents = (store, Provider) => {
  for (const componentName in components) {
    const component = components[componentName]
    Navigation.registerComponent(componentName, () => component, store, Provider)
  }
}

export default registerComponents
