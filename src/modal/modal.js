import React from 'react';
import {
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import GetScreenHeight from '../config/height';
import GetScreenWidth from '../config/width';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../header/header';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
export default class EditJob extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: this.props.items.companyName,
      email: this.props.items.email,
      password: this.props.items.password,
      position: this.props.items.position,
      Qualification: this.props.items.Qualification,
      field: this.props.items.field,
      // ModalVisible: true,
    };
    this.saveData = this.saveData.bind(this);
  }

  saveData() {
    const users = {
      email: this.state.email,
      companyName: this.state.companyName,
      field: this.state.field,
      position: this.state.position,
      Qualification: this.state.Qualification,
    };
    console.log('users==>', users);

    const reference = database()
      .ref('/Admin')
      .child('company')
      .child('Jobs')
      .push(users);
    // var id=reference.ke
    this.props.navigation.navigate('Home');
    console.log('Auto Generated key: ', reference.key);
    console.log();
  }

  EditKey = () => {
    const {email, companyName, field, position, Qualification} = this.state;
    console.log('Updarte', this.state);
    database().ref('/Admin/company/Jobs/').child(this.props.items.id).update({
      email: email,
      companyName: companyName,
      field: field,
      position: position,
      Qualification: Qualification,
    });
    this.props.showModal();
    this.props.getData();
  };

  render() {
    console.log('ahkajdkpasd', this.props);
    return (
      <>
        <Modal
          style={{
            backgroundColor: 'white',
            flex: 1,
          }}
          isVisible={true}>
          <View>
            <ImageBackground
              style={{width: '100%', height: 250}}
              source={{
                uri:
                  'https://av.sc.com/corp-en/content/images/Working_with_us_v2.jpg',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.showModal();
                }}>
                <Icon
                  style={styles.icon}
                  name="arrow-back"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{flex: 1}}>
            <ScrollView>
              <ImageBackground
                style={{width: '100%', height: GetScreenHeight(80)}}
                source={{
                  uri:
                    'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}>
                <View style={styles.RegisterView}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 0.8}}>
                      <Icon
                        style={styles.icon}
                        name="ios-person-add"
                        size={50}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 2, alignSelf: 'center'}}>
                      <Text style={{fontSize: 40, justifyContent: 'center'}}>
                        Edit Job
                      </Text>
                    </View>
                  </View>
                  <Text style={{justifyContent: 'center', alignSelf: 'center'}}>
                    As A Company
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'grey',
                      marginVertical: 10,
                    }}></View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <TextInput
                      onChangeText={(text) =>
                        this.setState({companyName: text})
                      }
                      placeholder="Company Name"
                      style={styles.EmailAddress}
                      value={this.state.companyName}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <TextInput
                      onChangeText={(text) => this.setState({email: text})}
                      placeholder="Mobile Number or Email Address"
                      style={styles.EmailAddress}
                      value={this.state.email}
                    />
                  </View>
                  {/* <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
      <TextInput onChangeText={(text)=>this.setState({password:text})} placeholder="Password"  style={styles.NewPassword}/>
      </View> */}

                  {/* <View style={{justifyContent:"center",alignItems:"center"}}>

<TextInput placeholder="Company Name"  style={styles.Qualification}/>
</View> */}
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                      onChangeText={(text) => this.setState({position: text})}
                      placeholder="Add Post for which position"
                      style={styles.Qualification}
                      value={this.state.position}
                    />
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                      onChangeText={(text) =>
                        this.setState({Qualification: text})
                      }
                      placeholder="Minimum Qualification Required"
                      style={styles.Qualification}
                      value={this.state.Qualification}
                    />
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                      onChangeText={(text) => this.setState({field: text})}
                      placeholder="Field Required"
                      style={styles.Qualification}
                      value={this.state.field}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => this.EditKey()}
                    style={styles.RegisterButton}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </ScrollView>
          </View>
        </Modal>
      </>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    borderWidth: 1,
    height: GetScreenHeight(6),
    width: GetScreenWidth(38),
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  EmailAddress: {
    borderWidth: 1,
    height: GetScreenHeight(6),
    width: GetScreenWidth(80),
    borderRadius: 5,
  },
  NewPassword: {
    borderWidth: 1,
    height: GetScreenHeight(6),
    width: GetScreenWidth(80),
    borderRadius: 5,
  },
  Qualification: {
    borderWidth: 1,
    height: GetScreenHeight(6),
    width: GetScreenWidth(80),
    borderRadius: 5,
    marginTop: 10,
  },
  NameView: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    margin: 5,
  },

  RegisterView: {
    borderWidth: 2,
    borderColor: 'grey',
    borderColor: 'red',

    width: GetScreenWidth(90),
    // height:'100%',

    justifyContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 20,
    padding: 20,
  },
  RegisterButton: {
    backgroundColor: 'red',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 10,
    marginTop: 10,
    width: GetScreenWidth(80),
    // margin:10
  },
});
