// @flow

import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import type { City } from 'src/flow/types'

type Props = {
  +city: City,
}

export default class CityListItem extends Component<Props, {}> {
  render () {
    const {
      city: {
        image,
        name,
        population,
      },
    } = this.props
    const photoUri: string = image ? `https:${image}` : 'https://d30y9cdsu7xlg0.cloudfront.net/png/10486-200.png'
    return (
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: photoUri }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.population}>Pop. {population}</Text>
        </View>
      </View>
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
