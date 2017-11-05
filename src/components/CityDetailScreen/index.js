// @flow

import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import type { City, Navigator } from 'src/flow/types'
import CityAttributeRow from '../CityAttributeRow'
import { prettyNumber } from '../../services/text-formatting'
import Icon from 'react-native-vector-icons/Ionicons'

type Props = {
  +city: City,
  +navigator: Navigator,
}
type State = {}

export default class CityDetailScreen extends Component<Props, State> {
  static navigatorStyle = {
    navBarHidden: true,
  }

  navigateBack = () => {
    this.props.navigator.pop()
  }

  render () {
    const {
      averageCommuteMinutes,
      crimeIndex,
      image,
      medianHomePrice,
      name,
      population,
      populationDensity,
      povertyRate,
      stateName,
      unemploymentRate,
    } = this.props.city
    return (
      <View style={styles.screen}>
        <TouchableOpacity style={styles.backIcon} onPress={this.navigateBack} hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}>
          <Icon name="md-arrow-back" size={35} color="white" />
        </TouchableOpacity>
        <ScrollView>
          <Image style={styles.image} source={{ uri: image }}/>
          <View style={styles.summary}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.stateName}>{stateName}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsHeadline}>DETAILS</Text>
            <View style={styles.detailsBox}>
              <CityAttributeRow
                descriptor="people"
                label="Population"
                value={prettyNumber(population)}
              />
              <CityAttributeRow
                descriptor="people / sq mi"
                label="Population Density"
                value={prettyNumber(populationDensity)}
              />
              <CityAttributeRow
                label="Crime Index"
                value={crimeIndex.toFixed(1)}
              />
              <CityAttributeRow
                label="Median Home Price"
                value={`$${prettyNumber(medianHomePrice)}`}
              />
              <CityAttributeRow
                label="Average Commute"
                value={averageCommuteMinutes.toFixed(1)}
                descriptor="minutes"
              />
              <CityAttributeRow
                label="Unemployment Rate"
                value={`${unemploymentRate.toFixed(1)}%`}
              />
              <CityAttributeRow
                label="Poverty Rate"
                value={`${povertyRate.toFixed(1)}%`}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backIcon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 10,
    top: 20,
    zIndex: 100,
  },
  image: {
    height: 250,
  },
  summary: {
    backgroundColor: 'white',
    padding: 10,
    shadowColor: 'lightgray',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  stateName: {
    color: 'gray',
    fontSize: 11,
  },
  details: {
    padding: 10,
    paddingTop: 20,
  },
  detailsHeadline: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  detailsBox: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
})
