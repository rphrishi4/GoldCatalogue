import {StyleSheet,Button, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDrawerStatus } from '@react-navigation/drawer';
import DrawerNavigator from '../navigators/DrawerNavigator';
import { useNavigation } from '@react-navigation/native';
interface HeaderBarProps {
  title?: string;
   navigation1?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title,navigation1}) => {
const navigation = useNavigation();
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => navigation1.openDrawer()}>
        <GradientBGIcon
          name="menu"
          color={COLORS.primaryLightGreyHex}
          size={FONTSIZE.size_16}
        />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{title}</Text>

      <TouchableOpacity onPress={() => navigation1.navigateToScreen('NotifcationScreen')}>
      <ProfilePic />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
