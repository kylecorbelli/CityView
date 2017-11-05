// @flow

import { Navigation } from 'react-native-navigation'
import CitiesListScreen from './src/containers/CitiesListScreen'
import CityDetailScreen from './src/containers/CityDetailScreen'

// Still have to extract this:
import React from 'react'
import { View, Text } from 'react-native'
const CitiesMapScreen = () => (
  <View style={{
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  }}>
    <Text>Map Search Screen</Text>
  </View>
)

CitiesMapScreen.navigatorStyle = {
  navBarHidden: true,
}

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
