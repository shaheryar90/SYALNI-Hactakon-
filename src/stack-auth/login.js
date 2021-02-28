import React from 'react';
import { Button, View,TextInput ,StyleSheet, TouchableOpacity,Text,Image,ImageBackground,ScrollView} from 'react-native';
import GetScreenHeight from '../config/height'
import GetScreenWidth from '../config/width'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

// import firebase from '@react-native-firebase/app';
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

    
    // firebase.initializeApp(config);
    this.props.navigation.navigate("Navigation")
    alert("successfully login")
    console.log("users==>",users)
    
    //  const reference=database().ref('/').child('users').push(users)
    // console.log('Auto Generated key: ',reference)
    
      }
render(){
  return(
    <>
    <View>
     <Image style={{width:'100%',height:250}} source={{uri:"https://av.sc.com/corp-en/content/images/Working_with_us_v2.jpg"}} />
    </View>

<ScrollView style={{flex:1}}>
    <ImageBackground style={{width:'100%',height:GetScreenHeight(80)}} source={{uri:'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}>
      <View  style={styles.RegisterView}>
    

 <View style={{flexDirection:'row',marginBottom:10}}>
   <View style={{flex:1}}>
   <Icon
                style={styles.icon}
                name="person"
                size={50}
                color="red"
              />
   </View>
   <View  style={{flex:2,alignSelf:'center'}}><Text style={{fontSize:40,justifyContent:'center'}}>Login</Text></View>
 </View>
      <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
      <TextInput  onChangeText={(text)=>this.setState({email:text})} placeholder="Mobile Number or Email Address"  style={styles.EmailAddress}/>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
      <TextInput secureTextEntry={true} onChangeText={(text)=>this.setState({password:text})} placeholder=" Password"  style={styles.NewPassword}/>
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



<View style={{justifyContent:'center',alignSelf:'center',alignSelf:'center'}}><Text style={{color:'red',fontSize:20}}>Register As A </Text></View>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("RegisterStudent")} style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Student</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("RegisterCompany")} style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Company</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>this.props.navigation.navigate("RegisterAdmin")} style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Admin</Text>
</TouchableOpacity>
      </View>
      </ImageBackground>
      </ScrollView>
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
  
       width:GetScreenWidth(90),
      //  height:GetScreenHeight(85),
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
      width:GetScreenWidth(80),
      
      marginVertical:10
      

  
    }
  })