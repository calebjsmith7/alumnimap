import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';
import { Data } from './SampleData';
import BackButton from './backButton';
import { Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Person({ route }) {
    const [showMailView, setShowMailView] = useState(false);
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <BackButton />
            {Data.map((item) => {
                if (item.id == route.name) {

                    return (
                        <View style={{ height: 'auto' }} key={Data.indexOf(item)}>
                            <View style={{ backgroundColor: '#174c4f', paddingTop: 13, paddingBottom: 13 }}>
                                <Text style={{ fontSize: 30, marginLeft: 20, color: '#FDFCFA' }}>{item.title}</Text>
                                <Divider style={{ backgroundColor: '#FDFCFA', width: '50%', marginLeft: 20, marginTop: 5 }} />
                                <Text style={{ marginLeft: 20, margin: 8, fontSize: 24, color: '#FDFCFA' }}>{item.schoolYear}</Text>
                            </View>
                            <View style={{ backgroundColor: '#1e2427', height: '100%' }}>
                                <ScrollView style={{ backgroundColor: '#1e2427' }}>
                                    <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto'}}>
                                        <Icon name={"checkbox"} color={'#6e7f80'} size={40} />
                                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1 }}>Gifting: {item.gifting.map((gift)=>gift + ', ')}</Text>
                                    </View>
                                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5 }} />
                                    <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20}}>
                                        <Icon name={"compass"} color={'#6e7f80'} size={40} />
                                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1 }}>Called to: {item.calling.map((call)=>call + ', ')}</Text>
                                    </View>
                                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5 }} />
                                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                                        <Icon name={"bulb"} color={'#6e7f80'} size={40} />
                                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1 }}>Trained In: {item.minTeam.map((min) => min + ', ')}</Text>
                                    </View>
                                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5 }} />
                                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                                        <Icon name={"home"} color={'#6e7f80'} size={40} />
                                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1 }}>Housing: {item.housing.map((house) => house + ', ')}</Text>
                                    </View>
                                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5 }} />
                                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                                        <Icon name={"mail"} color={'#6e7f80'} size={40} />
                                        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                            <Button mode='contained' color="#174c4f" icon={'send'} onPress={() => setShowMailView(!showMailView)} style={{ alignSelf: 'center', justifyContent: 'center' }}>Contact</Button>
                                        </View>
                                    </View>
                                    <View style={{ display: showMailView ? 'flex' : 'none', position: 'absolute', width: '100%', height: '85%', top: 0, backgroundColor: '#FDFCFA' }}>
                                        <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: '600' }}>Write an Email to {item.title}</Text>
                                        <TextInput
                                            style={{ height: 180, margin: 12, borderWidth: 1, padding: 10, fontSize: 15 }}
                                            multiline={true}
                                            maxLength={500}
                                            editable={true}
                                        />
                                        <Button mode='contained' color="#174c4f" icon={'send'} onPress={() => {console.log('sending func'); setShowMailView(false); Alert.alert('Success.', 'Sent email.')}} style={{ alignSelf: 'center', justifyContent: 'center', position: 'absolute', right: 20, bottom: 50 }}>Send</Button>
                                    </View>

                                </ScrollView>
                            </View>
                        </View>
                    );
                }
            })
            }

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