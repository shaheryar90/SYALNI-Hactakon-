import React from 'react';
import Header from '../header/header'
import { Button, View ,Text,Image} from 'react-native';
import { useLinkProps } from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';
import GetScreenHeight from '../config/height';
import GetScreenWidth from '../config/width';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
       'https://propakistani.pk/wp-content/uploads/2013/11/Blodd-Donation-.jpg',
   'https://www.waldenu.edu/-/media/walden/images/seo-article/seo-341-bs-donorship-7490684-1200x675.jpg?hash=2B983FAB69C2F23A82CC0B16B9503BDC',
'https://www.abc.net.au/cm/rimage/11603180-3x2-xlarge.jpg?v=2',
        'images.says.com/uploads/story_source/source_image/523828/a23a.jpg',
      ],
    };
  }
  // other component code ...

  render() {
    return (
      <><Header showMenu={true} title="My Home" navigation={this.props.navigation}  />
    
      <View>
        <SliderBox style={{height:GetScreenHeight(30),width:GetScreenWidth(100)}} images={this.state.images} autoplay circleLoop />
      </View>
      <View style={{flexDirection:"row",
   margin:20,
   padding:20,
   marginTop:40}} >
  <View style={{flex:2}}>
    <Text style={{fontSize:20,fontWeight:"bold"}}>Your one donation 
      can give 3 people another chance at life
      </Text>
  </View>
  <View style={{flex:1}}>
  <Image style={{height:100,width:100 }} source={{uri:'https://repository-images.githubusercontent.com/152029248/bdcac480-f326-11e9-8aa5-dafa9940739b'}}/>
  </View>
  </View>

  <View style={{flexDirection:"row" ,justifyContent:'space-around' ,marginTop:40}}>
    <View style={{borderColor:'grey',borderWidth:2}}>
      <Image style={{height:GetScreenHeight(25),width:GetScreenWidth(45) , resizeMode:"stretch" }} source={{uri:"http://dattmedi.com/blog/wp-content/uploads/2018/11/DMPL-Blood-Transfusion-1024x587.png"}}/></View>
     <View  style={{borderColor:'grey',borderWidth:2}}>
      <Image style={{height:GetScreenHeight(25),width:GetScreenWidth(45) }} source={{uri:"https://clubrunner.blob.core.windows.net/00000050137/Images/9d47464be0c64d5fb24d71031fc12573.jpg"}}/>
    </View>
    </View>
   
      </>
    );
  }
}


