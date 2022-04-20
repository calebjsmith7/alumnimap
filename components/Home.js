import React, { useEffect, useState } from 'react';
import { 
    View,
    Text
} from 'react-native';
import Loading from './Loading';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { Data } from './SampleData';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(){

    const [homeLocation, setHomeLocation] = useState({ latitude: 37.78825, longitude: -122.4324});
    const [loading, setLoading] = useState(true);
    // check local storage for location. if not saved, get location for map initial region then save in local for further use
    useEffect(()=>{
        const checkLocalForLocation = async () => {
            try {
                let value = await AsyncStorage.getItem('location');
            if(value !== null){
                // value previously stored

            }
            else if(!value){
                // value not previously stored

                Geolocation.getCurrentPosition(info => {
                    console.log('geolocation info is ' + JSON.stringify(info.coords));
                });
                setLoading(false);
            }
            } catch (error) {
                console.log(error);
            }
        }
        checkLocalForLocation();
    },[])
if(!loading){
    return(
        <View>
            <MapView
            style={{width: '100%', height: '100%'}}
            initialRegion={{
             latitude: homeLocation.latitude,
             longitude: homeLocation.longitude,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}>
                {Data.map((marker, index) => (
                    
                        <Marker
                            key={index}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            title={marker.title}
                            onPress={()=> console.log('pressed ' + marker.title)}
                        />
                    
               ))}
           </MapView>
        </View>
     );
} else {
    return(
        <Loading/>
    );
}
    
}