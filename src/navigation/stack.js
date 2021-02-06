import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import  Login from '../stack-auth/login';
import  Register from '../stack-auth/register';
import  ForgotPassword from '../stack-auth/forgotPassword';
import Navigation from './navigation ';



import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function Home() {
    return (
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        {/* <Stack.Screen initialRoot={Login} component={Login} />  */}
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Navigation" options={{headerShown:false}} component={Navigation} />

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
      
      </Stack.Navigator>
    );
  }