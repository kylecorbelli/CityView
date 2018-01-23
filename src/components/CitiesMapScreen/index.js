// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import MapView from 'react-native-maps'
import type { City, Navigator } from 'src/flow/types'
import { icons } from '../../constants'

type Props = {
  +cities: Array<City>,
  +navigator: Navigator,
}
type State = {}

export default class CitiesMapScreen extends Component<Props, State> {
  static navigatorStyle = {
    navBarHidden: true,
  }

  inspectCity = (city: City) => () => {
    const { navigator } = this.props
    navigator.showModal({
      screen: 'CityDetailScreen',
      passProps: {
        city,
      },
    })
  }

  render () {
    // console.log(icons)
    console.log(icons)
    return (
      <View style={styles.screen}>
        <MapView
          initialRegion={{
            latitude: 36.81408706935203,
            longitude: -119.3663494243851,
            latitudeDelta: 12.97193514164567,
            longitudeDelta: 10.1704374849642,
          }}
          style={styles.map}
        >
          {this.props.cities.map((city, index) => (
            <MapView.Marker
              coordinate={{
                latitude: city.latitude,
                longitude: -city.longitude,
              }}
              image={icons.mapPinIcon}
              onPress={this.inspectCity(city)}
              key={index}
            />
          ))}
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
})
