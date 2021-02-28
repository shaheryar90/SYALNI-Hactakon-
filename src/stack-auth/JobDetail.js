import React from 'react';
import { Button, View,TextInput ,StyleSheet, TouchableOpacity,Text,Image,ScrollView,ImageBackground} from 'react-native';
import GetScreenHeight from '../config/height'
import GetScreenWidth from '../config/width'
import DropDownPicker from 'react-native-dropdown-picker';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';
// import RadioButton  from 'react-native-paper';
import RadioButtonRN from 'radio-buttons-react-native';
import firebase from '@react-native-firebase/app';
import Header from '../header/header';
import Job from '../screens/jobs'

export default class JobDetail extends React.Component {
  constructor(){
      super()
      this.state={
          firstName:'',
          lastName:'',
        email:'',
        password:'',

        checked:'first',
      }

 

  }


render(){
  return(
<>
<View>
     <ImageBackground style={{width:'100%',height:250}} source={{uri:"https://av.sc.com/corp-en/content/images/Working_with_us_v2.jpg"}} >
     <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
      <Icon style={styles.icon} name="arrow-back" size={25} color="white" /></TouchableOpacity></ImageBackground>
    </View>
<View style={{marginLeft:20,marginTop:10}}><Text style={{fontSize:20,color:'red'}}>All Jobs</Text></View>
<Job/>

</>

  )
}
}
  const styles=StyleSheet.create({
    name:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(38),
      borderRadius:5,
      justifyContent:'space-between'


    },
    EmailAddress:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(80),
      borderRadius:5
      
      


    },
    NewPassword:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(80),
      borderRadius:5,

    },
    Qualification:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(80),
      borderRadius:5,
      marginTop:10,
    },
    NameView:{
      flexDirection:"row",
      justifyContent:"center",
      justifyContent:"space-between",
    },
    
    icon:{
        margin:5,
      },
    

    RegisterView:{
      borderWidth:2,
      borderColor:"grey",
      borderColor:'red',
 
      width:GetScreenWidth(90),
    // height:'100%',
    
      justifyContent:"center",
alignSelf:"center",
justifyContent:"center",
marginTop:40,
borderRadius:20,
padding:20
    },
    RegisterButton:{
      backgroundColor:'red',
      padding:10,
      justifyContent:"center",
      alignItems:'center',
      alignSelf:"stretch",
      borderRadius:10,
    marginTop:10,
      width:GetScreenWidth(80),
      // margin:10
  
    }
  })