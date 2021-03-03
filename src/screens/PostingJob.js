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
export default class PostingJob extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      email: '',
      password: '',
      position: '',
      Qualification: '',
      field: '',
    };
  }
  componentDidMount() {
    database()
      .ref('/Admin/company/Jobs/')
      .once('value')
      .then((snapshot) => {
        console.log('User data post job:===> ', snapshot.val());
        var a = snapshot.val();
        this.setState({
          companyName: companyName,
          email: email,
          password: password,
          position: position,
          Qualification: Qualification,
          field: field,
        });
      });
  }

  render() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 20,
            flex: 1,
            width: GetScreenWidth(90),
            justifyContent: 'space-between',
          }}>
          <ScrollView
            // horizontal={true}
            showHorizontalScrollView={false}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('JobDetail')}
              style={{borderColor: 'grey', borderWidth: 2}}>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Company Name:
                <Text style={{color: 'red'}}>{this.state.companyName}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Apply on:
                <Text style={{color: 'red'}}>{this.state.email}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                position:
                <Text style={{color: 'red'}}> {this.state.position}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Minimum Qualification:
                <Text style={{color: 'red'}}> {this.state.Qualification}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Required Field:
                <Text style={{color: 'red'}}> {this.state.field}</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('JobDetail')}
              style={{borderColor: 'grey', borderWidth: 2, marginTop: 5}}>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Company Name:
                <Text style={{color: 'red'}}>
                  {this.state.companyName}
                </Text>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Apply on: <Text style={{color: 'red'}}>{this.state.email}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                position:
                <Text style={{color: 'red'}}> {this.state.position}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Minimum Qualification:{' '}
                <Text style={{color: 'red'}}> {this.state.Qualification}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Required Field:{' '}
                <Text style={{color: 'red'}}> {this.state.field}</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('JobDetail')}
              style={{borderColor: 'grey', borderWidth: 2, marginTop: 5}}>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Company Name:
                <Text style={{color: 'red'}}>
                  {this.state.companyNamec}
                </Text>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Apply on:{' '}
                <Text style={{color: 'red'}}>{this.state.emailc}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                position:
                <Text style={{color: 'red'}}> {this.state.positionc}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Minimum Qualification:{' '}
                <Text style={{color: 'red'}}> {this.state.Qualificationc}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Required Field:{' '}
                <Text style={{color: 'red'}}> {this.state.fieldc}</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('JobDetail')}
              style={{borderColor: 'grey', borderWidth: 2, marginTop: 5}}>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Company Name:
                <Text style={{color: 'red'}}>
                  {this.state.companyName}
                </Text>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Apply on: <Text style={{color: 'red'}}>{this.state.email}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                position:
                <Text style={{color: 'red'}}> Wordpress Developer</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Minimum Qualification:{' '}
                <Text style={{color: 'red'}}> {this.state.Qualification}</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Required Field:{' '}
                <Text style={{color: 'red'}}> {this.state.field}</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('JobDetail')}
              style={{borderColor: 'grey', borderWidth: 2, marginTop: 5}}>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Company Name:<Text style={{color: 'red'}}>Cubix</Text>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Apply on: <Text style={{color: 'red'}}>careers@cubix.com</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                position:<Text style={{color: 'red'}}> React.js Developer</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Minimum Qualification:{' '}
                <Text style={{color: 'red'}}> Bachelor</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Required Field:{' '}
                <Text style={{color: 'red'}}> computer science</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('JobDetail')}
              style={{borderColor: 'grey', borderWidth: 2, marginTop: 5}}>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Company Name:
                <Text style={{color: 'red'}}>Tafsol Technologis</Text>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Apply on: <Text style={{color: 'red'}}>careers@tafsol.com</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                position:
                <Text style={{color: 'red'}}>Web and App internee</Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Minimum Qualification:{' '}
                <Text style={{color: 'red'}}>Bachelor </Text>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Required Field:{' '}
                <Text style={{color: 'red'}}>Computer Science</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </>
    );
  }
}
