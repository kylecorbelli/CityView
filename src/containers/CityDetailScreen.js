// @flow

import { connect } from 'react-redux'
import CityDetailScreen from '../components/CityDetailScreen'
import type { AppState } from 'src/flow/types'

const mapStateToProps = (state: AppState, ownProps) => {
  return state
}

export default connect(
  null,
  null,
)(CityDetailScreen)
