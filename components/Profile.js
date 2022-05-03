import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Profile(props) {



    return (
        <View style={{ height: 'auto' }}>
            <View style={{ backgroundColor: '#174c4f', paddingTop: 13, paddingBottom: 13 }}>
                <Text style={{ fontSize: 30, marginLeft: 20, color: '#FDFCFA' }}>{props.theUser ? props.theUser.name : null}</Text>
                <Divider style={{ backgroundColor: '#FDFCFA', width: '50%', marginLeft: 20, marginTop: 5 }} />
                <Text style={{ marginLeft: 20, margin: 8, fontSize: 24, color: '#FDFCFA' }}>{props.theUser ? props.theUser.schoolYear : null}</Text>
            </View>
            <View style={{ backgroundColor: '#1e2427', height: '100%' }}>
                <ScrollView style={{ backgroundColor: '#1e2427' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto' }}>
                        <Icon name={"checkbox"} color={'#6e7f80'} size={40}  />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Gifting: {props.theUser ? props.theUser.gifting.map((gift)=> gift + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5,  }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                        <Icon name={"compass"} color={'#6e7f80'} size={40}  />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1,  }}>Called to: {props.theUser ? props.theUser.calling: null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5,  }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                        <Icon name={"bulb"} color={'#6e7f80'} size={40}  />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1,  }}>Trained In: {props.theUser ? props.theUser.minTeam.map((min)=> min + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5,  }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                        <Icon name={"home"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1,  }}>Housing: {props.theUser ? props.theUser.housing.map((house)=> house + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5,  }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20,  }}>
                        <Icon name={"mail"} color={'#6e7f80'} size={40} />
                        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1,  }}>Contact: {props.theUser ? props.theUser.email : null}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    event: {
        height: 'auto',
        alignSelf: 'center',
        backgroundColor: '#FDFCFA',
        marginBottom: 5,
        marginTop: 20,
        paddingBottom: 20

    },

});