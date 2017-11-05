// @flow

import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import type { City, Navigator } from 'src/flow/types'
import CityListItem from '../CityListItem'

type Props = {
  +cities: Array<City>,
  +navigator: Navigator,
}

export default class CitiesListScreen extends Component<Props, {}> {
  render () {
    const { cities, navigator } = this.props
    return (
      <View style={styles.screen}>
        <FlatList
          data={cities}
          keyExtractor={(city, index) => city.id}
          renderItem={({ item }) => <CityListItem city={item} navigator={navigator} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'stretch',
    height: '100%',
    justifyContent: 'center',
  },
})
