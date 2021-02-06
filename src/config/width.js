import * as React from 'react';
import { Dimensions } from 'react-native';


export default function GetScreenWidth(per){
    const onepercent=Dimensions.get('screen').width/100;
    return onepercent*per;
}