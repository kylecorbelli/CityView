// @flow

import type {
  Action,
  CitiesByIdState,
} from 'src/flow/types'

const byId = (state: CitiesByIdState = {}, action: Action): CitiesByIdState => {
  switch (action.type) {
    case 'FETCH_CITIES_REQUEST_SUCCEEDED':
      return action.payload.citiesById
    default:
      return state
  }
}

export default byId
