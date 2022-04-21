import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import { eventData } from './SampleEventData';
import BackButton from './backButton';

export default function EventTemplate({ route }) {
    let id;
    let max = eventData.length;
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <BackButton />
            {eventData.map((item) => {
                if (item.slug == route.name) {

                    return (
                        <ScrollView style={{ width: 370, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, height: 'auto' }} key={eventData.indexOf(item)}>
                            <Text style={{ fontSize: 18, marginLeft: 10 }}>{item.title}</Text>
                            <Text style={{ marginLeft: 10, margin: 8, fontSize: 17 }}>{item.fulltext}</Text>
                        </ScrollView>
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