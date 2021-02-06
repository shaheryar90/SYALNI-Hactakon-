/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet, Text,TextInput,TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
export default function Header (props) {
// const [hidden,setHidden] = useState(true);
// const [iconName,setIconName] = useState('search-sharp');



  return (
    <>
     <View style={styles.container}>
       
   {props.showMenu ?(

       <View style={styles.left} ><TouchableOpacity style={{flex:1}} onPress={()=>props.navigation.openDrawer()} >
      <Icon style={styles.icon} name="menu" size={25} color="white" /></TouchableOpacity>
      <View style={{flex:5}}><Text style={{color:'white',paddingTop:3}}>{props.title}</Text></View>
      </View>
   ):(
     <View style={styles.left} ><TouchableOpacity onPress={()=>props.navigation.goBack()} >
      <Icon style={styles.icon} name="arrow-back" size={25} color="white" /></TouchableOpacity></View>
   )}

    </View>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
  },
  left: {
      flex:1,
      alignItems: 'flex-start',
      paddingLeft:10 ,
      flexDirection:'row'
  },
  middle: {
      flex:2,
      alignItems: 'center',
  },
  right: {
      flex:1,
      alignItems: 'flex-end',
      paddingRight:10 ,
  },
  text1: {
    color: 'white',
    fontSize: 25,
  },
  TextInput1:{
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'white',
    width:290,
    borderRadius:25
  },
  View2:{
    alignItems:'center',
    alignSelf:'center',
  },
});
