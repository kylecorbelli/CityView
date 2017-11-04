import { Navigation } from 'react-native-navigation'
import { AppRegistry } from 'react-native';
import App from './App';

import React from 'react'
import { View, Text } from 'react-native'

const MapSearchScreen = () => (
  <View style={{
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  }}>
    <Text>Map Search Screen</Text>
  </View>
)

MapSearchScreen.navigatorStyle = {
  navBarHidden: true,
}

const ListSearchScreen = () => (
  <View style={{
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  }}>
    <Text>List Search Screen</Text>
  </View>
)

Navigation.registerComponent('MapSearchScreen', () => MapSearchScreen)
Navigation.registerComponent('ListSearchScreen', () => ListSearchScreen)

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Map',
      screen: 'MapSearchScreen',
      title: 'Map',
    },
    {
      label: 'List',
      screen: 'ListSearchScreen',
      title: 'List',
    },
  ],
})

// AppRegistry.registerComponent('CityView', () => App);
