import * as React from 'react';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';
import GethScreenWidth from '../config/width';
import GethScreenHeight from '../config/height';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../navigation/stack';


export default class AuthorizeDrawer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View>
                <View style={{ justifyContent: 'center', alignItems: "center", marginTop: 10 }}>
                    <View><Text style={{ fontSize: 23, color: "red", fontWeight: 'bold' }}>Blood Bank Application</Text></View>
                    <View >
                        <Image style={{ height: GethScreenHeight(30), width: GethScreenWidth(70) }} source={{ uri: 'https://repository-images.githubusercontent.com/152029248/bdcac480-f326-11e9-8aa5-dafa9940739b' }} />
                    </View>
                </View>
                <ImageBackground style={{ height: GethScreenHeight(80), width: GethScreenWidth(71) }} source={{ uri: "https://media.gettyimages.com/videos/4k-abstract-particle-wave-bokeh-background-red-glamour-love-beautiful-video-id1199312560?s=640x640" }}>
                    
                
                        <View style={{ flexDirection: 'row',marginTop:20}}><View style={{ flex: 1, marginLeft: 10 ,justifyContent:"center",alignItems:'center'}}>
                            <Icon style={styles.icon} name="person-circle" size={60} color="white" /></View>
                         </View>
             <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                 <Text style={{color:'white',fontSize:20}}>shaheryar Khan</Text>
             </View>
                    
                    
                    <TouchableOpacity style={{marginTop:60}} onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}><View style={{ flex: 1, marginLeft: 10 }}>
                            <Icon style={styles.icon} name="home" size={25} color="white" /></View>
                            <View style={{ flex: 3 }}><Text style={{ color: 'white', fontSize: 20 }}>Home</Text></View>
                        </View>
                    </TouchableOpacity>




                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Donation')} >
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}><View style={{ flex: 1, marginLeft: 10 }}>
                            <Icon style={styles.icon} name="ios-flame-sharp" size={25} color="white" /></View>
                            <View style={{ flex: 3 }}><Text style={{ color: 'white', fontSize: 20 }}>Donation</Text></View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Donor Detail')}
                    ><View style={{ flexDirection: 'row', marginVertical: 20 }}><View style={{ flex: 1, marginLeft: 10 }}>
                        <Icon style={styles.icon} name="document-text-sharp" size={25} color="white" /></View>
                            <View style={{ flex: 3 }}><Text style={{ color: 'white', fontSize: 20 }}>Donor Detail</Text></View>
                        </View></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Logout')}><View style={{ flexDirection: 'row', marginVertical: 20 }}><View style={{ flex: 1, marginLeft: 10 }}>
                        <Icon style={styles.icon} name="person-remove-outline" size={25} color="white" /></View>
                        <View style={{ flex: 3 }}><Text style={{ color: 'white', fontSize: 20 }}>Logout</Text></View>
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
