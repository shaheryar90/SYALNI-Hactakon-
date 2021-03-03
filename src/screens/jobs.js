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
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import GetScreenHeight from '../config/height';
import GetScreenWidth from '../config/width';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../header/header';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Job extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      email: '',
      password: '',
      position: '',
      Qualification: '',
      field: '',
      companyNamec: '',
      emailc: '',
      passwordc: '',
      positionc: '',
      Qualificationc: '',
      fieldc: '',
      allJobs: [],
    };
  }

  Item = ({item, i}) => {
    console.log(item);
    return (
      <TouchableOpacity
        key={i}
        style={{
          borderColor: 'grey',
          // borderWidth: 2,
          marginBottom: 40,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
          height: 400,
          padding: 20,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, marginTop: 10}}>Company Name:</Text>
        <Text style={{fontSize: 20, marginTop: 10, color: 'red'}}>
          {item.companyName}
        </Text>

        <Text style={{fontSize: 20, marginTop: 10}}>Apply on:</Text>
        <Text style={{fontSize: 20, marginTop: 10, color: 'red'}}>
          {item.email}
        </Text>
        <Text style={{fontSize: 20, marginTop: 10}}>position:</Text>
        <Text style={{fontSize: 20, marginTop: 10, color: 'red'}}>
          {item.position}
        </Text>
        <Text style={{fontSize: 20, marginTop: 10}}>
          Minimum Qualification:
        </Text>
        <Text style={{fontSize: 20, marginTop: 10, color: 'red'}}>
          {item.Qualification}
        </Text>
        <Text style={{fontSize: 20, marginTop: 10}}>Required Field:</Text>
        <Text style={{fontSize: 20, marginTop: 10, color: 'red'}}>
          {item.field}
        </Text>
      </TouchableOpacity>
    );
  };

  componentDidMount() {
    var allCompanyJobs = [];
    database()
      .ref('/Admin/company/Jobs/')
      .once('value')
      .then((snapshot) => {
        console.log('User data:===> ', snapshot.val());
        var dbData = snapshot.val();
        for (var key in dbData) {
          allCompanyJobs.push(dbData[key]);
        }
        console.log('sdadasdas', allCompanyJobs);
        this.setState({
          allJobs: allCompanyJobs,
        });
      });
  }

  render() {
    console.log('key', this.state.allJobs);
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
          <SafeAreaView style={styles.container}>
            {this.state.allJobs.length !== 0 ? (
              <FlatList
                data={this.state.allJobs}
                renderItem={this.Item}
                keyExtractor={(item) => item.id}
              />
            ) : null}
          </SafeAreaView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
