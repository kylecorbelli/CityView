// @flow

import { combineReducers } from 'redux'
import type {
  AppState,
  Action,
} from 'src/flow/types'
import entities from './entities'

const rootReducer = combineReducers({
  entities,
})

export default rootReducer
