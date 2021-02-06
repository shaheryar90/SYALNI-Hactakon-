import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoder';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import GetLocation from 'react-native-get-location';
import Header from '../header/header';

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {lat: null, lng: null},
      loading: true,
      address: {},
    };
  }

  componentDidMount() {
    this.setState({loading: true, location: null});

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then((location) => {
        this.setState({
          location,
          loading: false,
        });
        // console.log(location);
        this.setState({
          location: {lat: location.latitude, lng: location.longitude},
        });
        // Position Geocoding
        var NY = {
          lat: this.state.location.lat,
          lng: this.state.location.lng,
        };

        Geocoder.geocodePosition(NY)
          .then((res) => {
            console.log(res);
            const address = res[0].formattedAddress;
            // console.log(address);
            this.setState({address: address});
            console.log('HGJHASGGDJASGDJSGDJGDSHDJASDGJSD', this.state.address);
            // res is an Array of geocoding object (see below)
          })
          .catch((err) => console.log(err));

        // Address Geocoding
        Geocoder.geocodeAddress('Pakistan')
          .then((res) => {
            // res is an Array of geocoding object (see below)
          })
          .catch((err) => console.log(err));
      })
      .catch((ex) => {
        const {code, message} = ex;
        // console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location: null,
          loading: false,
        });
      });
  }
  currentLocation1 = () => {
    console.warn(this.state.address);
    this.props.navigation.navigate('DonateRegister', {address: this.state.address});
  };

  render() {
    return (
      <>
      <Header  title="Map"  navigation={this.props.navigation}   />
      <View style={{flex: 1}}>
        {this.state.loading ? (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: this.state.location.lat,
                longitude: this.state.location.lng,
                // latitude: 25.453453,
                // longitude: 21341241,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker draggable
                coordinate={{
                  latitude: this.state.location.lat,
                  longitude: this.state.location.lng,
                  
                }}
              //   onDragEnd={(e) =>
              //     this.setState({ location:{lat:e.nativeEvent.coordinate.latitude,lng:e.nativeEvent.coordinate.longitude} 
              //     })}
              />
            </MapView>

            <View>
              <Button
                onPress={this.currentLocation1}
                style={{position: 'absolute', zIndex: 1}}
                title="Add current location"
              />
            </View>
          </View>
        )}
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  location: {
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    marginBottom: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
