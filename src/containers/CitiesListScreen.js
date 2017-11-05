// @flow

import { connect } from 'react-redux'
import CitiesListScreen from '../components/CitiesListScreen'
import type { AppState } from 'src/flow/types'

const mapStateToProps = (state: AppState) => ({
  cities: Object.values(state.entities.cities.byId),
})

export default connect(
  mapStateToProps,
  null,
)(CitiesListScreen)
