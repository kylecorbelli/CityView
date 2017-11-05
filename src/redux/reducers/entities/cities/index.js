// @flow

import { combineReducers } from 'redux'
import loading from './loading'
import byId from './byId'

const cities = combineReducers({
  loading,
  byId,
})

export default cities
