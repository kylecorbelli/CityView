// @flow

import { Navigation } from 'react-native-navigation'
import { AppRegistry } from 'react-native';
import App from './App';
import Icon from 'react-native-vector-icons/Ionicons'
import { Provider } from 'react-redux'
import { fetchCities } from './src/redux/actions'
import registerComponents from './register-components'
import configureStore from './src/redux/configure-store'

const store = configureStore()
store.dispatch(fetchCities())

registerComponents(store, Provider)

const main = async () => {
  const listIcon = await Icon.getImageSource('ios-list', 40)
  const mapIcon = await Icon.getImageSource('ios-map-outline', 40)
  Navigation.startTabBasedApp({
    tabs: [
      {
        icon: mapIcon,
        label: 'Map',
        screen: 'CitiesMapScreen',
        title: 'Map',
      },
      {
        icon: listIcon,
        label: 'List',
        screen: 'CitiesListScreen',
        title: 'Cities',
      },
    ],
  })
}

main()
