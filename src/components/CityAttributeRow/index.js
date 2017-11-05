// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

type Props = {
  +descriptor?: string,
  +label: string,
  +value: string,
}
type State = {}

export default class CityAttributeRow extends Component<Props, State> {
  render () {
    const {
      descriptor,
      label,
      value,
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}:</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{value}</Text>
          {Boolean(descriptor) && <Text style={styles.descriptor}>{descriptor}</Text>}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#f4f4f4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 50,
    padding: 10,
  },
  labelContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  labelText: {
    fontWeight: 'bold',
  },
  valueContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  valueText: {
    fontWeight: 'bold',
  },
  descriptor: {
    color: 'gray',
    fontSize: 11,
  },
})
