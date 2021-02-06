import React from 'react';
import { Button, View,TextInput ,StyleSheet, TouchableOpacity,Text,Image,ImageBackground} from 'react-native';
import GetScreenHeight from '../config/height'
import GetScreenWidth from '../config/width'
import DropDownPicker from 'react-native-dropdown-picker';
import database from '@react-native-firebase/database';

import firebase from '@react-native-firebase/app';
export default class Login extends React.Component {
  constructor(props){
      super(props)
      this.state={
        email:'',
        password:'',
      }
  this.saveData=this.saveData.bind(this)
 
  }


  saveData=()=>{
    const users={
      email:this.state.email,
      password:this.state.password
    }
    this.props.navigation.navigate("Navigation")
    console.log("users==>",users)
    
     const reference=database().ref('/').child('users').push(users)
    console.log('Auto Generated key: ',reference)
    
      }
render(){
  return(
      
      <View  style={styles.RegisterView}>
    

 <View style={{flexDirection:'row'}}>
   <View style={{flex:1}}>
   <Image style={{height:100,width:100 }} source={{uri:'https://repository-images.githubusercontent.com/152029248/bdcac480-f326-11e9-8aa5-dafa9940739b'}}/>
   </View>
   <View  style={{flex:2,marginTop:20,alignSelf:'center'}}><Text style={{fontSize:40,justifyContent:'center'}}>Login</Text></View>
 </View>
      <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
      <TextInput  onChangeText={(text)=>this.setState({email:text})} placeholder="Mobile Number or Email Address"  style={styles.EmailAddress}/>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
      <TextInput onChangeText={(text)=>this.setState({password:text})} placeholder="Confirm Password"  style={styles.NewPassword}/>
      </View>
      
     
     
   
<TouchableOpacity onPress={this.saveData} style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Login</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("ForgotPassword")} >
<Text style={{justifyContent:"center",alignSelf:'center',color:'red'}}>Forgotten Password?</Text>

</TouchableOpacity>
<View style={{flexDirection:'row',justifyContent:"center"}}>
<View style={{borderWidth:1,borderColor:'grey',marginTop:20,marginVertical:10,marginBottom:20,width:GetScreenWidth(30)}}>
</View>
<View style={{marginTop:10,marginHorizontal:5}}><Text>or</Text></View>
<View style={{borderWidth:1,borderColor:'grey',marginTop:20,marginVertical:10,marginBottom:20,width:GetScreenWidth(30)}}>
</View>
</View>




<TouchableOpacity onPress={()=>this.props.navigation.navigate("Register")} style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Register</Text>
</TouchableOpacity>
      </View>
    
    );
  }

}
  const styles=StyleSheet.create({
    name:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(38),
      borderRadius:5


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
      borderRadius:5

    }
    ,NameView:{
      flexDirection:"row",
      justifyContent:"center",
      justifyContent:"space-around",
    },
    RegisterView:{
       borderWidth:2,
       borderColor:"grey",
       borderColor:'red',
       padding:10,
       width:GetScreenWidth(90),
       height:GetScreenHeight(55),
       justifyContent:"center",
alignSelf:"center",
justifyContent:"center",
marginTop:80,
borderRadius:20,

    },
    RegisterButton:{
      backgroundColor:'red',
      padding:10,
      justifyContent:"center",
      alignItems:'center',
      alignSelf:"stretch",
      borderRadius:10,
      width:GetScreenWidth(80),
      margin:10
  
    }
  })