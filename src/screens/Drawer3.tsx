import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {RootStackParamList} from '../navigators/StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type propsType = NativeStackScreenProps<RootStackParamList,'Drawer3'>

const Drawer3 = (props:propsType) => {

    const{navigation} = props;
    const gotoScreen1= ()=>{
navigation.navigate('Drawer1')
    };
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.heading}>Drawer3</Text>
          <View>
          <Button title="Go to Drawer 1" color="brown" onPress={gotoScreen1}/>
          </View>
        </View>
      </View>
    )
  }
  
  export default Drawer3
  
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