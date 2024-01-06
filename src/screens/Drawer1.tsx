import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../navigators/StackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type propsType=NativeStackScreenProps<RootStackParamList,'Drawer1'>



const Drawer1 = (props:propsType) => {
    const {navigation} =props;
    const gotoScreen2 = ()=> {
        navigation.navigate('Drawer2')
    
    }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>In Drawer1</Text>
        <View>
        <Button title="Go to Drawer 2" color="red" onPress={gotoScreen2}/>
        </View>
      </View>
    </View>
  )
}

export default Drawer1

const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    alignItems:'center',
},
heading:{
    color:'black',

    fontSize:32,
    fontWeight:'300',
},

})