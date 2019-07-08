import { createAppContainer, createStackNavigator } from 'react-navigation'

import PostsList from 'App/Containers/PostsList'
import SplashScreen from 'App/Containers/SplashScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: PostsList,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
