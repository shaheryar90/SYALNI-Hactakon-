import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import  HomeScreen from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Donate from '../screens/donation' ;
import AuthorizeDrawer from '../navigation/customizeDrawer';
import DonateRegister1 from '../stack-auth/DonateRegister';
import DropDownPicker from 'react-native-dropdown-picker';
import Donor from '../screens/donor Details'
import Login from '../stack-auth/login';
import Home from '../navigation/stack';
import MapComponent from '../stack-auth/map';




const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function DonateRegister() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Donate" options={{headerShown:false}} component={Donate} />
    <Stack.Screen name="DonateRegister" options={{headerShown:false}}  component={currentLocation} />
    {/* <Stack.Screen name="DonateRegister"  component={MapComponent} /> */}
    
    </Stack.Navigator>
  );
}

function currentLocation() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen initialRoot={Login} component={Login} /> */}
      <Stack.Screen name="DonateRegister" options={{headerShown:false}} component={DonateRegister1} />
      <Stack.Screen name="Map"  options={{headerShown:false}} component={MapComponent} />

    </Stack.Navigator>
  );
}

// function logOut() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="login" options={{headerShown:false}} component={Login} />

//     </Stack.Navigator>
//   );
// }




export default function Navigation() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        unmountOnBlur:false,
      }}
      drawerContent={(props)=><AuthorizeDrawer {...props}/>
    }
      drawerContentOptions={{
        activeTintColor:'red',
        itemStyle:{},
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Donation" component={DonateRegister} />
        <Drawer.Screen name="Donor Detail" component={Donor} />
        <Drawer.Screen name="Logout" component={Home} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}