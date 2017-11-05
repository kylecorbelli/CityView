// @flow

import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import type { City } from 'src/flow/types'
import CityListItem from '../CityListItem'

type Props = {
  +cities: Array<City>,
}

export default class CitiesListScreen extends Component<Props, {}> {
  render () {
    const { cities } = this.props
    return (
      <View style={styles.screen}>
        <FlatList
          data={cities}
          keyExtractor={(city, index) => city.id}
          renderItem={({ item }) => <CityListItem city={item} />}
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
