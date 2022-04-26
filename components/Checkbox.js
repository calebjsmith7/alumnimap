import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function Checkboxes(props) {

    const listify = ()=> {
        if(props.list.includes(props.name)){
            let localList = props.list;
            localList.splice(props.list.indexOf(props.name), 1,);
            console.log('localList is ' + localList);
            props.setList(localList);
        } else {
            let localList = props.list;
            localList.push(props.name);
            console.log('localList is ' + localList);
            props.setList(localList);
        }
    }
    return (
        <BouncyCheckbox
            size={25}
            fillColor="#174c4f"
            unfillColor='#ffffff'
            text={props.name}
            iconStyle={{ borderColor: '#174c4f' }}
            textStyle={{ textDecorationLine: 'none' }}
            style={{ marginTop: '2%', marginRight: props.margin }}
            onPress={() => listify()}
        />
    );
}