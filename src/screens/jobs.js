import React from 'react';
import { Button, View,TextInput ,StyleSheet, TouchableOpacity,Text,Image,ImageBackground,ScrollView} from 'react-native';
import GetScreenHeight from '../config/height'
import GetScreenWidth from '../config/width'
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../header/header';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Job extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
         companyName:'',
          email:'',
          password:'',
          position:'',
          Qualification:"",
          field:"",
         companyNamec:'',
          emailc:'',
          passwordc:'',
          positionc:'',
          Qualificationc:"",
          fieldc:"",

          
          
          
        };
       
  }
  componentDidMount(){
    database()
    .ref('/Admin/company/Jobs/-MUddlrp4sfL1Q0iM6LZ')
    .once('value')
    .then(snapshot => {
      console.log('User data:===> ', snapshot.val());
      var a=snapshot.val()
      this.setState({ companyNamea:a.companyName,
      emaila:a.email,
      passworda:a.password,
      positiona:a.position,
      Qualificationa:a.Qualification,
      fielda:a.field})
  
    });
    database()
    .ref('/Admin/company/Jobs/-MUe7iYFjR1wreS-M6WK')
    .once('value')
    .then(snapshot => {
      console.log('User data:===> ', snapshot.val());
      var b=snapshot.val()
      this.setState({ companyName:b.companyName,
      email:b.email,
      password:b.password,
      position:b.position,
      Qualification:b.Qualification,
      field:b.field})
  
    });
    database()
    .ref('/Admin/company/Jobs/-MUeD3TviGyq8-5IT1qh')
    .once('value')
    .then(snapshot => {
      console.log('User data:===> ', snapshot.val());
      var c=snapshot.val()
      this.setState({ companyNamec:c.companyName,
      emailc:c.email,
      passwordc:c.password,
      positionc:c.position,
      Qualificationc:c.Qualification,
      fieldc:c.field})
  
    });
    
    
  }
  
  render(){
    return(
    <>
      
<View style={{flexDirection:"row"  ,marginTop:10,marginLeft:20,flex:1,width:GetScreenWidth(90),justifyContent:'space-between'}}>

<ScrollView
      // horizontal={true}
      showHorizontalScrollView={false}
      showsHorizontalScrollIndicator={false}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("JobDetail")} style={{borderColor:'grey',borderWidth:2}}>
<Text style={{fontSize:20,marginTop:10,}}>Company Name:<Text style={{color:'red'}}>{this.state.companyNamea}</Text> </Text>
<Text style={{fontSize:20 ,marginTop:10}}>Apply on: <Text style={{color:'red'}}>{this.state.emaila}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>position:<Text style={{color:'red'}}> {this.state.positiona}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Minimum Qualification: <Text style={{color:'red'}}> {this.state.Qualificationa}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Required Field: <Text style={{color:'red'}}> {this.state.fielda}</Text></Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("JobDetail")} style={{borderColor:'grey',borderWidth:2,marginTop:5}}>
<Text style={{fontSize:20,marginTop:10,}}>Company Name:<Text style={{color:'red'}}>{this.state.companyName}</Text> </Text>
<Text style={{fontSize:20 ,marginTop:10}}>Apply on: <Text style={{color:'red'}}>{this.state.email}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>position:<Text style={{color:'red'}}> {this.state.position}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Minimum Qualification: <Text style={{color:'red'}}> {this.state.Qualification}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Required Field: <Text style={{color:'red'}}> {this.state.field}</Text></Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("JobDetail")} style={{borderColor:'grey',borderWidth:2,marginTop:5}}>
<Text style={{fontSize:20,marginTop:10,}}>Company Name:<Text style={{color:'red'}}>{this.state.companyNamec}</Text> </Text>
<Text style={{fontSize:20 ,marginTop:10}}>Apply on: <Text style={{color:'red'}}>{this.state.emailc}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>position:<Text style={{color:'red'}}> {this.state.positionc}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Minimum Qualification: <Text style={{color:'red'}}> {this.state.Qualificationc}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Required Field: <Text style={{color:'red'}}> {this.state.fieldc}</Text></Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("JobDetail")} style={{borderColor:'grey',borderWidth:2,marginTop:5}}>
<Text style={{fontSize:20,marginTop:10,}}>Company Name:<Text style={{color:'red'}}>{this.state.companyName}</Text> </Text>
<Text style={{fontSize:20 ,marginTop:10}}>Apply on: <Text style={{color:'red'}}>{this.state.email}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>position:<Text style={{color:'red'}}> Wordpress Developer</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Minimum Qualification: <Text style={{color:'red'}}> {this.state.Qualification}</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Required Field: <Text style={{color:'red'}}> {this.state.field}</Text></Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("JobDetail")} style={{borderColor:'grey',borderWidth:2,marginTop:5}}>
<Text style={{fontSize:20,marginTop:10,}}>Company Name:<Text style={{color:'red'}}>Cubix</Text> </Text>
<Text style={{fontSize:20 ,marginTop:10}}>Apply on: <Text style={{color:'red'}}>careers@cubix.com</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>position:<Text style={{color:'red'}}> React.js Developer</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Minimum Qualification: <Text style={{color:'red'}}> Bachelor</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Required Field: <Text style={{color:'red'}}> computer science</Text></Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("JobDetail")} style={{borderColor:'grey',borderWidth:2,marginTop:5}}>
<Text style={{fontSize:20,marginTop:10,}}>Company Name:<Text style={{color:'red'}}>Tafsol Technologis</Text> </Text>
<Text style={{fontSize:20 ,marginTop:10}}>Apply on: <Text style={{color:'red'}}>careers@tafsol.com</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>position:<Text style={{color:'red'}}>Web and App internee</Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Minimum Qualification: <Text style={{color:'red'}}>Bachelor </Text></Text>
<Text  style={{fontSize:20 ,marginTop:10}}>Required Field: <Text style={{color:'red'}}>Computer Science</Text></Text>
  </TouchableOpacity>

  </ScrollView>
  </View>
  </>

    )}}
