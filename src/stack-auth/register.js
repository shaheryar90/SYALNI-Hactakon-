import React from 'react';
import { Button, View,TextInput ,StyleSheet, TouchableOpacity,Text,Image} from 'react-native';
import GetScreenHeight from '../config/height'
import GetScreenWidth from '../config/width'
import DropDownPicker from 'react-native-dropdown-picker';
import database from '@react-native-firebase/database';

import firebase from '@react-native-firebase/app';
import Header from '../header/header';

export default class Register extends React.Component {
  constructor(){
      super()
      this.state={
        email:'',
        password:'',
      }
  this.saveData=this.saveData.bind(this)
 

  }

saveData(){
const users={
  email:this.state.email,
  password:this.state.password
}
console.log("users==>",users)

 const reference=firebase.database().ref('/').child('users').push(users)
 this.props.navigation.navigate('Login')
console.log('Auto Generated key: ',reference)
console.log()

  }
render(){
  return(
<>
    <Header   navigation={this.props.navigation} />
      <View  style={styles.RegisterView}>
       
 <View style={{flexDirection:'row'}}>
   <View style={{flex:1}}>
   <Image style={{height:100,width:100 }} source={{uri:'https://repository-images.githubusercontent.com/152029248/bdcac480-f326-11e9-8aa5-dafa9940739b'}}/>
   </View>
   <View  style={{flex:2,marginTop:20,alignSelf:'center'}}><Text style={{fontSize:40,justifyContent:'center'}}>Sign Up</Text></View>
  
 </View>
 <Text style={{justifyContent:"center",alignSelf:'center'}}>it's easy and quick</Text>
<View style={{borderWidth:1,borderColor:'grey',marginTop:20,marginVertical:10,marginBottom:20}}>

</View>
        <View style={styles.NameView}>
<View>
<TextInput  onChangeText={(text)=>this.setState({email:text})} placeholder="first name"  style={styles.name}/>
</View>
      <View>
      <TextInput onChangeText={(text)=>this.setState({password:text})} placeholder="last name"  style={styles.name}/>
      </View>

      </View>

      <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
      <TextInput placeholder="Mobile Number or Email Address"  style={styles.EmailAddress}/>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
      <TextInput placeholder="New Password"  style={styles.NewPassword}/>
      </View>

     
     
      <View style={{justifyContent:"center",alignItems:"center"}}>

      <TextInput placeholder="Confirm Password"  style={styles.NewPassword}/>
      </View>
      <Text style={{marginTop:12}}>By clicking Sign Up, you agree to our <Text style={{color:'red'}}> Terms, Data Policy and Cookie Policy</Text>. You may receive SMS notifications from us and can opt out at any time</Text>

<TouchableOpacity onPress={this.saveData} style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Register</Text>
</TouchableOpacity>
      </View>
      </>
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
       height:GetScreenHeight(70),
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