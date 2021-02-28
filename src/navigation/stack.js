import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import  Login from '../stack-auth/login';
// import  RegisterStudent from '../stack-auth/register';
import  ForgotPassword from '../stack-auth/forgotPassword';
import Navigation from './navigation ';



import { createStackNavigator } from '@react-navigation/stack';
import RegisterStudent from '../stack-auth/RegisterStudent';
import RegisterCompany from '../stack-auth/RegisterCompany';
import RegisterAdmin from '../stack-auth/RegisterAdmin';
import JobDetail from '../stack-auth/JobDetail';




const StudentFunction=()=> {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="RegisterStudent">
      <Stack.Screen name="RegisterStudent" component={RegisterStudent} />

   
      <Stack.Screen name="Navigation" options={{headerShown:false}} component={JobDetail} />
      {/* <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
      <Stack.Screen name="RegisterAdmin" component={RegisterAdmin} /> */}

   
    
    </Stack.Navigator>


  );
}
const AdminFunction=()=> {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="RegisterAdmin">
      <Stack.Screen name="RegisterAdmin" component={RegisterAdmin} />

   
      <Stack.Screen name="Navigation" options={{headerShown:false}} component={Navigation} />
      {/* <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
      <Stack.Screen name="RegisterAdmin" component={RegisterAdmin} /> */}

   
    
    </Stack.Navigator>


  );
}
const CompanyFunction=()=> {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="RegisterCompany">
      <Stack.Screen name="RegisterCompany" component={RegisterCompany} />

   
      <Stack.Screen name="Navigation" options={{headerShown:false}} component={Navigation} />
      {/* <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
      <Stack.Screen name="RegisterAdmin" component={RegisterAdmin} /> */}

   
    
    </Stack.Navigator>


  );
}
const Stack = createStackNavigator();
export default function Home() {
    return (
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        {/* <Stack.Screen initialRoot={Login} component={Login} />  */}
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="ForgotPassword" options={{headerShown:false}} component={ForgotPassword} />
        <Stack.Screen name="Navigation" options={{headerShown:false}} component={Navigation} />
        <Stack.Screen name="RegisterStudent" component={StudentFunction} />
        <Stack.Screen name="RegisterCompany" component={CompanyFunction} />
        <Stack.Screen name="RegisterAdmin" component={AdminFunction} />

     
      
      </Stack.Navigator>

    )}