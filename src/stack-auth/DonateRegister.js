import React from 'react';
import { Button, View,TextInput ,StyleSheet, TouchableOpacity,Text,Image,ScrollView} from 'react-native';
import GetScreenHeight from '../config/height'
import GetScreenWidth from '../config/width'
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../header/header';
export default class DonateRegister1 extends React.Component {
  constructor(props){
      super(props)
      
      this.state = {
        country: null,
        city: null,
        cities: []
    };
}

// componentDidMount() {
//     console.log('PARAMS', this.props.route);
//   }
bloodGroup(item) {
    let city = null;
    let blood;
    switch (item.value) {
        case 'A+':
            blood = [
                {label: 'A+', value: 'A+'},
                
            ];
        break;
        case 'B+':
            blood = [
                {label: 'B+', value: 'B+'},
            ];
        break;
        case 'O+':
            blood = [
                {label: 'O+', value: 'O+'},
            ];
        break;
        case 'AB+':
            blood = [
                {label: 'AB+', value: 'AB+'},
            ];
        break;
        case 'A-':
            blood = [
                {label: 'A-', value: 'A-'},
            ];
        break;
        case 'B-':
            blood = [
                {label: 'B-', value: 'B-'},
            ];
        break;
        case 'O-':
            blood = [
                {label: 'O-', value: 'O-'},
            ];
        break;
        case 'AB-':
            blood = [
                {label: 'AB-', value: 'AB-'},
            ];
        break;
    }

    this.setState({
        blood,
        blood
    });
}

bloodGroup(item) {
    this.setState({
        blood: item.value
    });
}
  
render(){
  return(

      <ScrollView>
          <Header   navigation={this.props.navigation} />
    
      <View  style={styles.RegisterView}>
       
 <View style={{flexDirection:'row'}}>
   <View style={{flex:1}}>
   <Image style={{height:100,width:100 }} source={{uri:'https://repository-images.githubusercontent.com/152029248/bdcac480-f326-11e9-8aa5-dafa9940739b'}}/>
   </View>
   <View  style={{flex:2,alignSelf:'center'}}><Text style={{fontSize:40,justifyContent:'center'}}>Donor Registration</Text></View>
  
 </View>
 <Text style={{justifyContent:"center",alignSelf:'center'}}>it's easy and quick</Text>
<View style={{borderWidth:1,borderColor:'grey',marginTop:20,marginVertical:10,marginBottom:20}}>

</View>
        <View style={styles.NameView}>
<View>
<TextInput placeholder="first name"  style={styles.name}/>
</View>
      <View>
      <TextInput placeholder="last name"  style={styles.name}/>
      </View>

      </View>

      <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
      <TextInput placeholder="Mobile Number or Email Address"  style={styles.EmailAddress}/>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
      <TextInput placeholder="DD/MM/YY"  style={styles.NewPassword}/>
      </View>
      
      <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>

      <TextInput placeholder="Enter your Gender"  style={styles.NewPassword}/>
      </View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Map")} style={{justifyContent:"center",alignItems:"center"}}>
      <TextInput editable={false} selection={{start:0,end:0}}
            selectTextOnFocus={false} placeholder="Enter your location city"  value={this.props.route.params?.address ?? null} style={styles.NewPassword}/>
      </TouchableOpacity>
      <View style={{justifyContent:"center",alignItems:"center"}}>


</View>
   <TextInput />
      <DropDownPicker
                    items={[
                        {label: 'A+', value: 'A+'},
                        {label: 'B+', value: 'B+'},
                        {label: 'O+', value: 'O+'},
                        {label: 'A-', value: 'A-'},
                        {label: 'B-', value: 'B-'},
                        {label: 'O-', value: '0-'},
                        {label: 'AB+', value: 'AB+'},
                        {label: 'AB-', value: 'AB-'},
                    ]}
                    defaultNull
                    placeholder="Blood Group"
                    containerStyle={{height: 40}}
                    onChangeItem={item => this.bloodGroup(item)}
    
                />
            
     
     
      <Text style={{marginTop:12}}>By clicking Sign Up, you agree to our <Text style={{color:'red'}}> Terms, Data Policy and Cookie Policy</Text>. You may receive SMS notifications from us and can opt out at any time</Text>

<TouchableOpacity style={styles.RegisterButton}>
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Register</Text>
</TouchableOpacity>

      </View>
      </ScrollView>
    );
  }

}
  const styles=StyleSheet.create({
    name:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(38),
      borderRadius:5


    },
    EmailAddress:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(80),
      borderRadius:5
      
      


    },
    NewPassword:{
      borderWidth:1,
      height:GetScreenHeight(6),
      width:GetScreenWidth(80),
      borderRadius:5

    }
    ,NameView:{
      flexDirection:"row",
      justifyContent:"center",
      justifyContent:"space-around",
    },
    RegisterView:{
       borderWidth:2,
       borderColor:"grey",
       borderColor:'red',
       padding:10,
       width:GetScreenWidth(90),
       height:GetScreenHeight(90), flex:1,
       justifyContent:"center",
alignSelf:"center",
justifyContent:"center",
marginTop:80,
borderRadius:20,

    },
    RegisterButton:{
      backgroundColor:'red',
      padding:10,
      justifyContent:"center",
      alignItems:'center',
      alignSelf:"stretch",
      borderRadius:10,
      width:GetScreenWidth(80),
      margin:10
  
    }
  })