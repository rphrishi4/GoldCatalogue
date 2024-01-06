import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import SplashScreen from 'react-native-splash-screen';
import DrawerNavigator from './src/navigators/DrawerNavigator';
// import MainStackNavigator from './src/navigators/StackNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      {/* <MainStackNavigator/> */}
      {/* <MainTabNavigator/> */}
      <DrawerNavigator/>
     
    </NavigationContainer>
  );
};

export default App;
