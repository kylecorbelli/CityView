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
            name,
            population,
            'population-density': populationDensity,
            'image-url': image,
            latitude,
            longitude,
          },
        } = currentCityData
        return {
          ...cumulativeCitiesById,
          [id]: {
            id,
            name,
            population,
            populationDensity,
            image,
            latitude: Number(latitude),
            longitude: Number(longitude),
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
