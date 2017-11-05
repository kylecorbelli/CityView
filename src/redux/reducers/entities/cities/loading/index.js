// @flow

import type {
  Action,
} from 'src/flow/types'

const loading = (state: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case 'FETCH_CITIES_REQUEST_SENT':
      return true
    case 'FETCH_CITIES_REQUEST_FAILED':
    case 'FETCH_CITIES_REQUEST_SUCCEEDED':
      return false
    default:
      return state
  }
}

export default loading
