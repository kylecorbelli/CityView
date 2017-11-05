// @flow

import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import type { City, Navigator } from 'src/flow/types'
import { prettyNumber } from '../../services/text-formatting'

type Props = {
  +city: City,
  +navigator: Navigator,
}

export default class CityListItem extends Component<Props, {}> {
  inspectCity = () => {
    const { city, navigator } = this.props
    navigator.push({
      screen: 'CityDetailScreen',
      passProps: {
        city,
      },
    })
  }

  render () {
    const {
      city: {
        image,
        name,
        population,
      },
    } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={this.inspectCity}>
        <Image style={styles.photo} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.population}>Pop. {prettyNumber(population)}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const rowHeight: number = 130

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: rowHeight,
    justifyContent: 'flex-start',
  },
  info: {
    paddingLeft: 15,
  },
  name: {
    fontSize: 28,
  },
  population: {
    fontSize: 12,
  },
  photo: {
    height: rowHeight,
    width: rowHeight,
  },
})
