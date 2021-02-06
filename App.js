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

import Navigation from './src/navigation/navigation '
import MyStack from './src/navigation/stackNavigation'


class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <MyStack/>
    )
  }
}
export default App;
