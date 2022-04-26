import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default function CustomCallout(props){
    return(
        <View style={{margin: 7, padding: '3%'}}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <Text style={{fontSize: 24}}>{props.title}</Text>
                <Text style={{marginLeft: 22, fontSize: 15, alignSelf: 'center'}}>{props.schoolYear}</Text>
            </View> 
                <Text style={{textAlign: 'left', marginBottom: 1, fontSize: 16}}>{props.gifting.map((each)=> '-' + each + '\n')}</Text>
                <Text style={{textAlign: 'left', fontSize: 16, marginBottom: 20}}>Housing: {props.housing}</Text>
        </View>
    );
}