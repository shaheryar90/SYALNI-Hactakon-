import * as React from 'react';
import { Dimensions} from 'react-native';


export default function GetScreenHeight(per){
    const onepercent=Dimensions.get('screen').height/100;
    return onepercent*per;
}