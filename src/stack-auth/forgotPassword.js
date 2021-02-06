import React from 'react';
import { Button, View,TextInput ,StyleSheet, TouchableOpacity,Text,Image} from 'react-native';
import GetScreenHeight from '../config/height'
import GetScreenWidth from '../config/width'
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../header/header';


export default class ForgotPassword extends React.Component {
  constructor(){
      super()
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
   <View  style={{flex:2,marginTop:20,alignSelf:'center'}}><Text style={{fontSize:25,justifyContent:'center'}}>Find your Account</Text></View>
  
 </View>
<View style={{borderWidth:1,borderColor:'grey',marginTop:20,marginVertical:10,marginBottom:20}}>

</View>
<Text>Please enter your email address or phone number to search for your account.</Text>

      <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
      <TextInput placeholder="Mobile Number or Email Address"  style={styles.EmailAddress}/>
      </View>

<TouchableOpacity style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Search</Text>
</TouchableOpacity>

      </View>
      </>
    );
  }

}
  const styles=StyleSheet.create({

    EmailAddress:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(80),
      borderRadius:5
      
      


    },
   
    RegisterView:{
       borderWidth:2,
       borderColor:"grey",
       borderColor:'red',
       padding:10,
       width:GetScreenWidth(90),
       height:GetScreenHeight(40),
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