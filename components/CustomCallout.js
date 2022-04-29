import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function CustomCallout(props){
    
    return(
        <TouchableOpacity style={{margin: 7, padding: '3%'}}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <Text style={{fontSize: 24}}>{props.title}</Text>
                <Text style={{marginLeft: 22, fontSize: 15, alignSelf: 'center'}}>{props.schoolYear ? props.schoolYear : null}</Text>
            </View> 
                <Text style={{textAlign: 'left', marginBottom: 1, fontSize: 16}}>{props.gifting ? props.gifting.map((each)=> '-' + each + '\n') : 'Ministry'}</Text>
                <Text style={{textAlign: 'left', fontSize: 16, marginBottom: 20}}>{props.housing ? "Housing:\n" + props.housing.map((each)=> '-' + each + '\n') : null}</Text>
        </TouchableOpacity>
    );
}