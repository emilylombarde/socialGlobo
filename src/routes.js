import { createSwitchNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import signIn from './pages/signIn'
import Home from './pages/Home'
import Noticias from './pages/Noticias'
import AuthLoadingScreen from './pages/AuthLoadingScreen'


// const Routes = createAppContainer(
//   createStackNavigator({
//     App: Home,
//     Noticias: Noticias,
//   })
// );

const StackNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const StackNavigatorContainer = createAppContainer(StackNavigator);

const AuthStack = createStackNavigator(
  {
    SignIn: signIn,
    App: StackNavigatorContainer,
    // SignUp: RegisterUser
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    header: null,
  },
);

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: StackNavigatorContainer,
    // Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootStackContainer = createAppContainer(RootStack);

// export default  TabNavigator = createAppContainer(
//   createBottomTabNavigator({
//     Home: StackNavigatorContainer,
//     Noticias: Noticias,
//   })
// );

export default RootStackContainer;
// export default Routes;
