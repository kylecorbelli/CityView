// @flow

import axios from 'axios'
import type {
  Dispatch,
} from 'redux'
import type {
  Action,
  City,
  CitiesByIdState,
  FetchCitiesRequestFailed,
  FetchCitiesRequestSent,
  FetchCitiesRequestSucceeded,
} from 'src/flow/types'

export const fetchCitiesRequestSent = (): FetchCitiesRequestSent => ({
  type: 'FETCH_CITIES_REQUEST_SENT',
})

export const fetchCitiesRequestFailed = (): FetchCitiesRequestFailed => ({
  type: 'FETCH_CITIES_REQUEST_FAILED',
})

export const fetchCitiesRequestSucceeded = (citiesById: CitiesByIdState): FetchCitiesRequestSucceeded => ({
  type: 'FETCH_CITIES_REQUEST_SUCCEEDED',
  payload: {
    citiesById,
  },
})

export const fetchCities = () => async (dispatch: Dispatch<Action>) => {
  dispatch(fetchCitiesRequestSent())
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/cities',
    })
    const citiesById: CitiesByIdState = response.data.data.reduce(
      (cumulativeCitiesById: CitiesByIdState, currentCityData) => {
        const {
          id,
          attributes: {
            'average-commute-minutes': averageCommuteMinutes,
            name,
            population,
            'crime-index': crimeIndex,
            'population-density': populationDensity,
            'image-url': imageUrl,
            'median-home-price': medianHomePrice,
            'poverty-rate': povertyRate,
            latitude,
            longitude,
            state: stateName,
            'unemployment-rate': unemploymentRate,
          },
        } = currentCityData
        return {
          ...cumulativeCitiesById,
          [id]: {
            averageCommuteMinutes: Number(averageCommuteMinutes),
            crimeIndex: Number(crimeIndex),
            id,
            image: imageUrl ? `https:${imageUrl}` : 'https://d30y9cdsu7xlg0.cloudfront.net/png/10486-200.png',
            latitude: Number(latitude),
            longitude: Number(longitude),
            medianHomePrice,
            name,
            population,
            populationDensity,
            povertyRate: Number(povertyRate),
            stateName,
            unemploymentRate: Number(unemploymentRate),
          },
        }
      },
      {},
    )
    dispatch(fetchCitiesRequestSucceeded(citiesById))
  } catch (error) {
    dispatch(fetchCitiesRequestFailed())
    throw error
  }
}
