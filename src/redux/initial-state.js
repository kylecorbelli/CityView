// @flow

import type {
  AppState,
} from 'src/flow/types'

const initialState: AppState = {
  entities: {
    cities: {
      loading: false,
      byId: {},
    },
  },
}

export default initialState
