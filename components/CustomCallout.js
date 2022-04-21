import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default function CustomCallout(props){
    return(
        <View style={{margin: 7, padding: '5%'}}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <Text style={{fontSize: 24}}>{props.title}</Text>
                <Text style={{marginLeft: 22, fontSize: 15, alignSelf: 'center'}}>{props.schoolYear}</Text>
            </View> 
                <Text style={{textAlign: 'left', marginBottom: 7, fontSize: 16}}>{props.description}</Text>
                <Text style={{textAlign: 'left', fontSize: 16}}>Housing: {props.housing}</Text>
        </View>
    );
}