import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../navigators/StackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type propsType=NativeStackScreenProps<RootStackParamList,'Drawer2'>



const Drawer2 = (props:propsType) => {
    const {navigation} =props;
    const gotoScreen3 = ()=> {
        navigation.navigate('Drawer3')
    
    }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>In Drawer2</Text>
        <View>
        <Button title="Go to Drawer 2" color="green" onPress={gotoScreen3}/>
        </View>
      </View>
    </View>
  )
}

export default Drawer2

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