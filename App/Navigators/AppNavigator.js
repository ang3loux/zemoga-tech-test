import { createAppContainer, createStackNavigator } from 'react-navigation'

import Screens from 'App/Containers'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: Screens.SplashScreen,
    MainScreen: Screens.PostsList,
    PostDetailScreen: Screens.PostDetail,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
