import React, { useEffect, useState } from 'react';
import { 
    View,
    Text
} from 'react-native';
import Loading from './Loading';
import MapView, { Marker, Callout } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { Data } from './SampleData';
import CustomCallout from './CustomCallout';

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
                    setHomeLocation({latitude: info.coords.latitude, longitude: info.coords.longitude});
                });
                
            }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        checkLocalForLocation();
    },[])
if(!loading){
    return(
        <View>
            <MapView
            style={{width: '100%', height: '100%'}}
            region={{
             latitude: homeLocation.latitude,
             longitude: homeLocation.longitude,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}>
                {Data.map((marker, index) => (

                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        //  title={marker.title}
                        //   description={marker.description}
                        onPress={() => console.log('pressed ' + marker.title)}>
                        <Callout style={{width: 200, height: 'auto'}}>
                            <CustomCallout {...marker} />
                        </Callout>
                    </Marker>

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