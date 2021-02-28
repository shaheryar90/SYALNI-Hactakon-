/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import Navigation from './src/navigation/navigation '
import MyStack from './src/navigation/stackNavigation'

import ScreenLogo from './src/SplashScreen/screenLogo';
// import CardContext from './src/context/cartContext';


class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
      loading: true,
      // cardCount: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 5000);
  }
  render() {
    if (this.state.loading == true) {
      return <ScreenLogo />
    } 
    
    else {
      return <MyStack />
    }
  }
}

export default App;
