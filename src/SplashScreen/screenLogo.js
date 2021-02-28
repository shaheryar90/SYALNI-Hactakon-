import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
// import Header from '../../header/header';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ScreenLogo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View
        style={{
          // justifyContent: 'center',
          // alignItems: 'center',
          // alignSelf: 'center',
          // marginTop: 200,
          flex:1
        }}>
          <View style={{  justifyContent: 'center',
          alignItems: 'center',
           alignSelf: 'center',
           marginTop:100}}>
            <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>Campus Recruitment Drive</Text>
            </View>
        <Image
          style={{width: 400, height: 400, resizeMode: 'contain'}}
          source={{
            uri:
            'https://d8it4huxumps7.cloudfront.net/bites/wp-content/banners/2020/7/5f02f3ca4efab_campus_recruitment_process_heres_everything_you_need_to_know.png?d=700x400'
          }}
          />
      </View>
    );
  }
}
