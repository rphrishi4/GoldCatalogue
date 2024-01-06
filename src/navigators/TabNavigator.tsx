import React from 'react';
import {StyleSheet,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcon from '../components/CustomIcon';
import BankDetails from '../screens/BankDetails';


import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import Dashboard from '../screens/Dashboard';
import NotificationScreen from '../screens/NotificationScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
var catalogueflag=true;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
        <Tab.Screen
        name="BankDetails"
        component={BankDetails}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
            <CustomIcon
              name="wallet"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
            <Text style={{color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, fontSize: 12, textAlign: 'center', fontFamily: FONTFAMILY.poppins_medium}}>
            Bank
            </Text>
            </>
          ),
        }}></Tab.Screen>


      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
            <CustomIcon
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
            <Text style={{color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, fontSize: 12, textAlign: 'center', fontFamily: FONTFAMILY.poppins_medium}}>
            Home
            </Text>
            </>
          ),
        }}></Tab.Screen>

        {/* Cart */}
        {catalogueflag &&(
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
            <CustomIcon
              name="cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
            <Text style={{color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, fontSize: 12, textAlign: 'center', fontFamily: FONTFAMILY.poppins_medium}}>
            Cart
            </Text>
            </>
          ),
        }}></Tab.Screen>
        )}

        {/* Favourites */}
        {catalogueflag &&(
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
            <CustomIcon
              name="like"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
            <Text style={{color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, fontSize: 12, textAlign: 'center', fontFamily: FONTFAMILY.poppins_medium}}>
            Favourite
            </Text>
            </>
          ),
        }}></Tab.Screen>
        )}

        {/* History */}
      {catalogueflag &&(
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
            <CustomIcon
              name="bank"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
            <Text style={{color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, fontSize: 12, textAlign: 'center', fontFamily: FONTFAMILY.poppins_medium}}>
            History
            </Text>
            </>
          ),
        }}></Tab.Screen>
      )}

        {/* AboutUs */}
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
            <CustomIcon
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
            <Text style={{color: focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, fontSize: 12, textAlign: 'center', fontFamily: FONTFAMILY.poppins_medium}}>
            Notifications
            </Text>
            </>
          ),
        }}></Tab.Screen>

      
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
