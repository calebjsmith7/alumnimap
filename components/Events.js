import React from 'react';
import { 
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { eventData } from './SampleEventData';
import eventBg from '../assets/photos/eventbg.png';

export default function Events(){
    const navigation = useNavigation();
    return(
        <ScrollView>
            {eventData.map((item) => {
                return (
                    <View style={styles.event} key={eventData.indexOf(item)}>
                        <TouchableOpacity onPress={() => navigation.navigate({ name: item.slug })}>
                            <ImageBackground source={eventBg} style={styles.eventImage}>
                                <Text style={{fontSize: 35, color: 'white', textAlign: 'center'}}>Event</Text>
                            </ImageBackground>
                            <Text style={{ fontSize: 25, margin: 5, marginLeft: 15 }}>{item.title}</Text>
                            <Text style={{ fontSize: 14, marginLeft: 15, color: '#565656' }}>{item.date}</Text>
                            <Text style={{ fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10 }}>{item.summary}</Text>
                        </TouchableOpacity>
                    </View>
                );
            })}
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    event: {
        height: 'auto',
        alignSelf: 'center',
        backgroundColor: '#FDFCFA',
        marginBottom: 5,
        marginTop: 20,
        paddingBottom: 20,
        width: '95%'
      },
      eventImage: {
        alignSelf: 'stretch',
        resizeMode: 'contain',
        height: 210,
        width: 'auto',
        justifyContent: 'center'
      }
    });