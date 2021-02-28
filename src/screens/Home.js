import React from 'react';
import Header from '../header/header'
import { Button, View ,Text,Image,TouchableOpacity, Touchable} from 'react-native';
import { useLinkProps } from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';
import GetScreenHeight from '../config/height';
import GetScreenWidth from '../config/width';
import Job from './jobs';

import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName:'',
      email:'',
      password:'',
      position:'',
      Qualification:"",
      field:"",
      companyNamea:'',
      emaila:'',
      passworda:'',
      positiona:'',
      Qualificationa:"",
      fielda:"",
      images: [
      "https://d8it4huxumps7.cloudfront.net/bites/wp-content/banners/2020/7/5f02f3ca4efab_campus_recruitment_process_heres_everything_you_need_to_know.png?d=700x400"
      ,"https://evalground.com/blog/wp-content/uploads/2018/05/campus-recruitment.png" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXi3COUvrzGvJTXn6P86K2fwEaEBlxj05Wg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_8RbSAIeSRPalVeYmYg3bM6CRQem3dLzpA&usqp=CAU"],
    };
  }
  // other component code ...

  render() {
    return (
      <>
      <Header showMenu={true} title="My Home" navigation={this.props.navigation}  />
    
      <View>
        <SliderBox style={{height:GetScreenHeight(30),width:GetScreenWidth(100)}} images={this.state.images} autoplay circleLoop />
      </View>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("JobDetail")} style={{marginTop:10,marginLeft:10}}>
      <Text style={{color:'red',fontSize:20,marginLeft:10}}>View Job</Text>
    </TouchableOpacity>
<Job navigation={this.props.navigation}/>


      </>
    );
  }
}


