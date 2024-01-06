import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import CustomDrawer from '../components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer1 from '../screens/Drawer1';
import Drawer2 from '../screens/Drawer2';
import Drawer3 from '../screens/Drawer3';
import TabNavigator from './TabNavigator';
import StackNavigator2 from './StackNavigator2';

type RootDrawerParamList = {
  Drawer1: undefined;
  Drawer2: undefined;
  Drawer3: undefined;
  TabNavigator: undefined;
  StackNavigator2:undefined;
  FavoritesScreen:undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
  return (

    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
     screenOptions={{headerShown: false}}>
        <Drawer.Screen name = {"StackNavigator2"}component={StackNavigator2} />
        <Drawer.Screen name={"Drawer1"} component={Drawer1}/>
        <Drawer.Screen name={"Drawer2"} component={Drawer2}/>
        <Drawer.Screen name={"Drawer3"} component={Drawer3}/>
        <Drawer.Screen name={"FavoritesScreen"} component={FavoritesScreen}/>

    </Drawer.Navigator>

  );
};

export default DrawerNavigator;

