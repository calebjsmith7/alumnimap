import React, { useEffect, useState } from 'react';
import { 
    View,
} from 'react-native';
import Loading from './Loading';
import MapView, { Marker, Callout } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { Data } from './SampleData';
import CustomCallout from './CustomCallout';
import { useNavigation } from '@react-navigation/native';

export default function Home(props){

    const [homeLocation, setHomeLocation] = useState({ latitude: 37.78825, longitude: -122.4324});
    const [loading, setLoading] = useState(true);
    const [bigList, setBigList] = useState([...Data]);
    const [subscriptionlist, setsubscriptionlist] = useState(props.comboList);
    const navigation = useNavigation();
    let listOfPoints = Data;

// sort function for people
    const sortIt = (item) => {
       
     /*   for (let i = 0; i < props.comboList.length; i++) {
            if(item.ministry == false){
                if ((!item.gifting.includes(props.comboList[i]) && !item.calling.includes(props.comboList[i]) && !item.housing.includes(props.comboList[i]) && !item.minTeam.includes(props.comboList[i])) || props.comboList[i] != 'Show Alumni Only') {
                   
                    return false;
                }
            } else {
                
                return false;
            } 
            if(props.comboList[i] == 'Show Ministries Only'){
                
                return false;
            }
        }
        // no churches in people markers
        if(item.ministry === true){
            
            return false;
            
        }
        return true;*/

        if(props.comboList.includes('Show Ministries Only')){
            return false;
        } 
        if(item.ministry === true){
            return false;
        }
        for (let i = 0; i < props.comboList.length; i++) {
            if(!item.gifting.includes(props.comboList[i]) && !item.calling.includes(props.comboList[i]) && !item.housing.includes(props.comboList[i]) && !item.minTeam.includes(props.comboList[i])){
                return false;
            }
        }
        return true;
    }
// sort function for ministries

const sortMins = (item) => {
    let falseFlag = 0;
   
    // no churches in people markers
    if(item.ministry === false){
        falseFlag++;
        return false;
    }
    for(let i = 0; i < props.comboList.length; i++){
        if(props.comboList[i] == 'Show Alumni Only'){
            falseFlag++;
            return false;
        }
    }
    if (falseFlag == 0) {
        return true;
    }
}

    useEffect(() => {
        let results = bigList.filter(sortIt);
        setBigList(results); 
    }, [subscriptionlist]);

    // check local storage for location. if not saved, get location for map initial region then save in local for further use
    useEffect(() => {
        const checkLocalForLocation = async () => {
            try {
                let value = await AsyncStorage.getItem('location');
            if(value !== null){
                // value previously stored
                console.log('value previously stored');
                let data = JSON.parse(value);
                setHomeLocation({latitude: JSON.parse(data.latitude), longitude: JSON.parse(data.longitude)});
            }
            else if(!value){
                // value not previously stored

                Geolocation.getCurrentPosition(info => {
                    console.log('geolocation info is ' + JSON.stringify(info.coords));
                    setHomeLocation({latitude: info.coords.latitude, longitude: info.coords.longitude});
                    AsyncStorage.setItem('location', JSON.stringify(info.coords));
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
                {listOfPoints.filter(sortIt).map((marker, index) => {
                    return (
                        <Marker
                            key={index}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
                            <Callout style={{ minWidth: 200, width: 'auto', height: 'auto' }} onPress={() => navigation.navigate({
                                name: marker.id
                            })}>
                                <CustomCallout {...marker} />
                            </Callout>
                        </Marker>
                    )
                })}
                {listOfPoints.filter(sortMins).map((marker, index) => {
                    return (
                        <Marker
                            key={index}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            image={{uri: 'churchLogo'}}
                            >
                            <Callout style={{ minWidth: 200, width: 'auto', height: 'auto' }} onPress={() => navigation.navigate({
                                name: marker.id
                            })}>
                                <CustomCallout {...marker} />
                            </Callout>
                        </Marker>
                    )
                })}
            </MapView>
        </View>
     );
} else {
    return(
        <Loading/>
    );
}
    
}