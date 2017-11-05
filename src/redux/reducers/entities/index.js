// @flow

import { combineReducers } from 'redux'
import cities from './cities'

const entities = combineReducers({
  cities,
})

export default entities
