import * as React from 'react';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';
import GethScreenWidth from '../config/width';
import GethScreenHeight from '../config/height';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../navigation/stack';


import database from '@react-native-firebase/database';
export default class AuthorizeDrawer extends React.Component {
    constructor() {
        super()
        this.state={
            name:'',
        }
    }


    componentDidMount(){
        database()
  .ref('/Admin/student/-MUdC-sz3_-iSNprLrGV/')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val().email);
    this.setState({name:snapshot.val().email})
  
  });
    }
    render() {
        return (
            <View>
                <View style={{ justifyContent: 'center', alignItems: "center", marginTop: 10 }}>
                    <View><Text style={{ fontSize: 20, color: "red", fontWeight: 'bold',marginBottom:10, }}>Campus Recruitment Drive</Text></View>
                    <View>
                        <Image style={{ height: GethScreenHeight(30), width: GethScreenWidth(70) }} source={{ uri:  'https://d8it4huxumps7.cloudfront.net/bites/wp-content/banners/2020/7/5f02f3ca4efab_campus_recruitment_process_heres_everything_you_need_to_know.png?d=700x400' }} />
                    </View>
                </View>
                <ImageBackground style={{ height: GethScreenHeight(80), width: GethScreenWidth(71) }} source={{ uri: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}>
                     <View style={{ flexDirection: 'row',marginTop:20}}><View style={{ flex: 1, marginLeft: 10 ,justifyContent:"center",alignItems:'center'}}>
                            <Icon style={styles.icon} name="person-circle" size={60} color="black" /></View>
                         </View>
             <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                 <Text style={{color:'black',fontSize:20}}>Shaheryar khan</Text>
             </View>
                    
                    
                    <TouchableOpacity style={{marginTop:60}} onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}><View style={{ flex: 1, marginLeft: 10 }}>
                            <Icon style={styles.icon} name="home" size={25} color="black" /></View>
                            <View style={{ flex: 3 }}><Text style={{ color: 'black', fontSize: 20 }}>Home</Text></View>
                        </View>
                    </TouchableOpacity>




                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PostJob')} >
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}><View style={{ flex: 1, marginLeft: 10 }}>
                            <Icon style={styles.icon} name="ios-flame-sharp" size={25} color="black" /></View>
                            <View style={{ flex: 3 }}><Text style={{ color: 'black', fontSize: 20 }}>Post a job</Text></View>
                        </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('JobDetail')} >
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}><View style={{ flex: 1, marginLeft: 10 }}>
                            <Icon style={styles.icon} name="ios-flame-sharp" size={25} color="black" /></View>
                            <View style={{ flex: 3 }}><Text style={{ color: 'black', fontSize: 20 }}>Job Detail</Text></View>
                        </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Logout')}><View style={{ flexDirection: 'row', marginVertical: 20 }}><View style={{ flex: 1, marginLeft: 10 }}>
                        <Icon style={styles.icon} name="person-remove-outline" size={25} color="black" /></View>
                        <View style={{ flex: 3 }}><Text style={{ color: 'black', fontSize: 20 }}>Logout</Text></View>
                    </View></TouchableOpacity>
                   

         </ImageBackground>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        height: 50,
    },
    left: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    middle: {
        flex: 2,
        alignItems: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    text1: {
        color: 'white',
        fontSize: 25,
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        width: 290,
        borderRadius: 25
    },
    View2: {
        alignItems: 'center',
        alignSelf: 'center',
    },
});
