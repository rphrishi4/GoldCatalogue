// BankDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
const BankDetails = () => {
  return (

    <View style={styles.ScreenContainer}>
    <HeaderBar title="Bank"/>
    <ScrollView>
      <View style={styles.container}>
      <Image
        source={require('../assets/app_images/hdfc-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>IFSC Code:</Text>
        <Text style={styles.value}>Your IFSC Code</Text>

        <Text style={styles.label}>Account Number:</Text>
        <Text style={styles.value}>Your Account Number</Text>
      </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: SPACING.space_20,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    marginBottom: SPACING.space_4,
  },
  value: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.secondaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_light,
    marginBottom: SPACING.space_20,
  },
});

export default BankDetails;
