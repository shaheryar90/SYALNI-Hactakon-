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

export default class RegisterCompany extends React.Component {
  constructor(){
      super()
      this.state={
          firstName:'',
          lastName:'',
        email:'',
        password:'',

        checked:'first',
      }
  this.saveData=this.saveData.bind(this)
 

  }

saveData(){
const users={
  email:this.state.email,
  firstName:this.state.firstName,
  lastName:this.state.lastName,
  password:this.state.password
}
console.log("users==>",users)

 const reference=database().ref('/Admin').child('company').push(users)
 alert("successfully Register")
 this.props.navigation.navigate('Navigation')
console.log('Auto Generated key: ',reference)
console.log()

  }
render(){

  const data = [
    {
      label: 'male',
    
      // label:'data 2',
     },
     {
      label: 'female'
     }
    ];

  return(


<>


<View>
     <ImageBackground style={{width:'100%',height:250}} source={{uri:"https://av.sc.com/corp-en/content/images/Working_with_us_v2.jpg"}} >
     <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
      <Icon style={styles.icon} name="arrow-back" size={25} color="white" /></TouchableOpacity></ImageBackground>
    </View>






    <View style={{flex:1}}>
<ScrollView >
    <ImageBackground style={{width:'100%',height:GetScreenHeight(80)}} source={{uri:'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}>
      <View  style={styles.RegisterView}>
       
 <View style={{flexDirection:'row'}}>
   <View style={{flex:0.8}}>
   <Icon
                style={styles.icon}
                name="ios-person-add"
                size={50}
                color="red"
              />
   </View>
   <View  style={{flex:2,alignSelf:'center'}}><Text style={{fontSize:40,justifyContent:'center'}}>Register</Text></View>
  
 </View>
 <Text style={{justifyContent:"center",alignSelf:'center'}}>As A Company</Text>
<View style={{borderWidth:1,borderColor:'grey',marginVertical:10}}>

</View>
        <View style={styles.NameView}>
<View>
<TextInput  onChangeText={(text)=>this.setState({firstName:text})} placeholder="first name"  style={styles.name}/>
</View>
      <View>
      <TextInput onChangeText={(text)=>this.setState({lastName:text})} placeholder="last name"  style={styles.name}/>
      </View>

      </View>

      <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
      <TextInput onChangeText={(text)=>this.setState({email:text})}  placeholder="Mobile Number or Email Address"  style={styles.EmailAddress}/>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
      <TextInput onChangeText={(text)=>this.setState({password:text})} placeholder="New Password"  style={styles.NewPassword}/>
      </View>

     
     
      <View ><Text style={{fontSize:20}}>Gender</Text></View>
<RadioButtonRN 
boxStyle={{ borderWidth:1,
  height:GetScreenHeight(4),
  width:GetScreenWidth(35),
  borderRadius:5,
  
borderColor:'black'}}
textStyle={{paddingLeft:10}}
  circleSize={10}
  data={data}
  selectedBtn={(e) => console.log(e)}
/>

<View style={{justifyContent:"center",alignItems:"center"}}>

<TextInput placeholder="Company Name"  style={styles.Qualification}/>
</View>
<View style={{justifyContent:"center",alignItems:"center"}}>

<TextInput placeholder="Add Post for which position"  style={styles.Qualification}/>
</View>
   

<TouchableOpacity onPress={this.saveData} style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Register</Text>
</TouchableOpacity>
   </View>

 </ImageBackground>
 </ScrollView>
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