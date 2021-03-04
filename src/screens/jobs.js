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
import EditJob from '../modal/modal';

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
      showEditJobModal: false,
      item: {},
      allJobs: [],
    };
  }
  deleteKey = (id) => {
    // console.log(id);
    database()
      .ref('/Admin/company/Jobs/')
      .child(id)
      .remove()
      .then(() => {
        var allCompanyJobs = [];
        database()
          .ref('/Admin/company/Jobs/')
          .once('value')
          .then((snapshot) => {
            console.log('User data:===> ', snapshot.val());
            var dbData = snapshot.val();
            for (var key in dbData) {
              dbData[key].id = key;
              allCompanyJobs.push(dbData[key]);
            }
            console.log('sdadasdas', allCompanyJobs);
            this.setState({
              allJobs: allCompanyJobs,
            });
          });
      });
  };

  ShowEditModal = (item) => {
    console.log('showeditmodal', item);
    this.setState({
      item: item,
      showEditJobModal: !this.state.showEditJobModal,
    });
  };
  Item = ({item, i}) => {
    // console.log('Data List ', item);
    return (
      <View
        key={i}
        style={{
          borderColor: 'grey',
          // borderWidth: 2,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
          height: 400,
          padding: 20,
          backgroundColor: 'white',
          // justifyContent: 'center',
          // alignItems: 'center',
          margin: 20,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'space-around',
              width: GetScreenWidth(70),
            }}>
            <Text style={{fontSize: 20}}>Company Name:</Text>
          </View>
          <TouchableOpacity onPress={() => this.deleteKey(item.id)}>
            <Icon
              style={styles.icon}
              name="trash-sharp"
              size={25}
              color="red"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.ShowEditModal(item)}>
            <Icon
              style={styles.icon}
              name="md-create-outline"
              size={25}
              color="red"
            />
          </TouchableOpacity>
        </View>
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
      </View>
    );
  };

  componentDidMount() {
    this.unsubcribed = this.props.navigation.addListener('focus', () => {
      this.getData();
    });

    this.getData();
  }

  getData = () => {
    var allCompanyJobs = [];
    database()
      .ref('/Admin/company/Jobs/')
      .once('value')
      .then((snapshot) => {
        console.log('User data:===> ', snapshot.val());
        var dbData = snapshot.val();
        for (var key in dbData) {
          dbData[key].id = key;
          allCompanyJobs.push(dbData[key]);
        }
        console.log('sdadasdas', allCompanyJobs);
        this.setState({
          allJobs: allCompanyJobs,
        });
      });
  };

  componentWillUnmount() {
    this.unsubcribed();
  }

  render() {
    // console.log('key');
    return (
      <>
        {this.state.showEditJobModal ? (
          <EditJob
            items={this.state.item}
            showModal={this.ShowEditModal}
            getData={this.getData}
          />
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            // marginLeft: 20,
            flex: 1,
            // width: GetScreenWidth(90),
            width: '100%',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <View style={styles.container}>
            {this.state.allJobs.length !== 0 ? (
              <FlatList
                data={this.state.allJobs}
                renderItem={this.Item.bind(this)}
                keyExtractor={(item) => item.id}
              />
            ) : null}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    width: '100%',
  },
});
