import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from 'App/Containers/Home'
import SplashScreen from 'App/Containers/SplashScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: Home,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
