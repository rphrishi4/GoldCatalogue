import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';
import MarqueeText from 'react-native-marquee';
//import firestore from '@react-native-firebase/firestore';

const InfiniteText = () => {

    var db_textscroll="We are working";
  return (
    <View >
        <View style={styles.ContainerInfiniteText}>
            <Marquee spacing={20} speed={0.75}>
                <Text style={styles.text}> {db_textscroll} </Text>
            </Marquee>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
ContainerInfiniteText:{
    marginTop:5,
    backgroundColor:'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
},
text: {
    marginLeft:10,
    margin:3,
    fontSize: 20,
    fontWeight:'bold',
    color: 'black',
    padding: 10,
    width: '100%',
  },
})

export default InfiniteText