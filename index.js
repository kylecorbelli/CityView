// @flow

import { Navigation } from 'react-native-navigation'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import { fetchCities } from './src/redux/actions'
import CitiesListScreen from './src/containers/CitiesListScreen'

import React from 'react'
import { View, Text } from 'react-native'

import configureStore from './src/redux/configure-store'

const store = configureStore()
store.dispatch(fetchCities())

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

Navigation.registerComponent('CitiesListScreen', () => CitiesListScreen, store, Provider)
Navigation.registerComponent('CitiesMapScreen', () => CitiesMapScreen, store, Provider)

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Map',
      screen: 'CitiesMapScreen',
      title: 'Map',
    },
    {
      label: 'List',
      screen: 'CitiesListScreen',
      title: 'Cities',
    },
  ],
})
