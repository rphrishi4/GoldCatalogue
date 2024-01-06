// CustomDrawer.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

type CustomDrawerProps = {
  navigation: any;
};

const CustomDrawer: React.FC<CustomDrawerProps> = ({ navigation }) => {
  const navigateToScreen = (routeName: string) => {
    navigation.navigate(routeName);
  };

  // Sample user data for demonstration
  const userName = "John Doe"; // Replace with actual user name
  const userProfilePicture = require('../assets/app_images/amazonpay.png');// Replace with actual image path

  return (
    <View style={styles.container}>
      {/* User Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={userProfilePicture} style={styles.profileImage} />
        <Text style={[styles.userName, { color: 'gold' }]}>{userName}</Text>
      </View>

      {/* Drawer Items */}
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('StackNavigator2')}>
        <Text style={[styles.drawerText, { color: 'gold' }]}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Drawer1')}>
        <Text style={[styles.drawerText, { color: 'gold' }]}>Drawer1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Drawer2')}>
        <Text style={[styles.drawerText, { color: 'gold' }]}>Drawer2</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Drawer3')}>
        <Text style={[styles.drawerText, { color: 'gold' }]}>Drawer3</Text>
      </TouchableOpacity>
      
      {/* <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('FavoritesScreen')}>
        <Text style={[styles.drawerText, { color: 'gold' }]}>FavoritesScreen</Text>
      </TouchableOpacity> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  profileContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // To make it circular
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderColor: 'transparent', // Initial border color
  },
  drawerText: {
    fontSize: 18,
  },
});

export default CustomDrawer;
