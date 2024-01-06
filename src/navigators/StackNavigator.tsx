// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer1 from '../screens/Drawer1';
import Drawer2 from '../screens/Drawer2';
import Drawer3 from '../screens/Drawer3';

// Define the Stack Navigator parameters
export type RootStackParamList = {
  Drawer1: undefined;
  Drawer2: undefined;
  Drawer3: undefined
};

// const Stack = createStackNavigator<RootStackParamList>();

// const MainStackNavigator = () => {
//   return (
//       <Stack.Navigator screenOptions={{headerStyle: {
//           backgroundColor: "#9AC4F8",
//         },
//         headerTintColor: "white",
//         headerBackTitle: "Back",
//         headerShown: false,
//         }} initialRouteName="Drawer1"
// >

        
//         <Stack.Screen
//            name="Drawer1"
//         component={Drawer1}
//           ></Stack.Screen>
//         <Stack.Screen
//           name="Drawer2"
//           component={Drawer2}
//           ></Stack.Screen>
//         <Stack.Screen
//           name="Drawer3"
//           component={Drawer3}
//           ></Stack.Screen>
//       </Stack.Navigator>
//   );
// };

// export default MainStackNavigator;
