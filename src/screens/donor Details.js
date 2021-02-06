import React from 'react';
import { Button, View,TextInput ,StyleSheet, TouchableOpacity,Text,Image,ImageBackground} from 'react-native';
import GetScreenHeight from '../config/height'
import GetScreenWidth from '../config/width'
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../header/header';
export default class Donor extends React.Component {

      constructor(props){
        super(props)
        
        this.state = {
          country: null,
          city: null,
          cities: []
      };
  }
  bloodGroup(item) {
    let city = null;
    let blood;
    switch (item.value) {
        case 'A+':
            blood = [
                {label: 'A+', value: 'A+'},
                
            ];
        break;
        case 'B+':
            blood = [
                {label: 'B+', value: 'B+'},
            ];
        break;
        case 'O+':
            blood = [
                {label: 'O+', value: 'O+'},
            ];
        break;
        case 'AB+':
            blood = [
                {label: 'AB+', value: 'AB+'},
            ];
        break;
        case 'A-':
            blood = [
                {label: 'A-', value: 'A-'},
            ];
        break;
        case 'B-':
            blood = [
                {label: 'B-', value: 'B-'},
            ];
        break;
        case 'O-':
            blood = [
                {label: 'O-', value: 'O-'},
            ];
        break;
        case 'AB-':
            blood = [
                {label: 'AB-', value: 'AB-'},
            ];
        break;
    }

    this.setState({
        blood,
        blood
    });
}

bloodGroup(item) {
    this.setState({
        blood: item.value
    });
}
  
  
render(){
  return(<>
    <Header showMenu={true} title="Donor Details" navigation={this.props.navigation}  />
    <View>
   <TextInput />
      <DropDownPicker
                    items={[
                        {label: 'A+', value: 'A+'},
                        {label: 'B+', value: 'B+'},
                        {label: 'O+', value: 'O+'},
                        {label: 'A-', value: 'A-'},
                        {label: 'B-', value: 'B-'},
                        {label: 'O-', value: '0-'},
                        {label: 'AB+', value: 'AB+'},
                        {label: 'AB-', value: 'AB-'},
                    ]}
                    defaultNull
                    placeholder="Blood Group"
                    containerStyle={{height: 60}}
                    onChangeItem={item => this.bloodGroup(item)}
    
                />
</View>
</>
)}}
      