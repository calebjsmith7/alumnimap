import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    Image,
    Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import defaultImage from '../assets/photos/basicprofile.png';

export default function Profile(props) {

    const [bgColor, setBgColor] = useState({ header: '#174c4f', main: '#1e2427' });
    const [editToggled, setEditToggled] = useState(false);
    const [showPhotoMenu, setShowPhotoMenu] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState();

    const listOfSpiritualGifts = ['Healing', 'Prophetic', 'Word of Knowledge', 'Miracles', 'Faith', 'Preaching', 'Teaching', 'Evangelism', 'Missions', 'Mystic', 'Discernment', 'Dance/Flagging', 'Worship'];
    const listOfCallings = ['Church', 'Education', 'Media', 'Family', 'Arts', 'Politics', 'Business', 'Medical', 'Sports', 'Science', 'Technology'];
    const listOfGuestHostings = ['Daytime Visitors', 'Couch Space', 'Floor Space', 'Guest Room', 'Other'];
    const listOfMinistryTeams = ['Transition Mentor', 'Healing Room Ministry', 'Prophetic Ministry', 'SOZO Ministry', 'Coaching Ministry', 'Other'];

    let options = {
        mediaType: 'photo',
        includeBase64: true
    };


    const addOrRemoveAttribute = (value, type, category) => {
        let localType = type;
        let localUser = props.theUser;
        
       
        // if user includes attribute that has been clicked
        if (type.includes(value)) {
            localType.splice(localType.indexOf(value), 1,);
            localUser.category = localType;
            props.setTheUser(localUser);
            props.setUseless(!props.useless);
            console.log(props.theUser);
        
        } else {
            localType.push(value);
            localUser.category = localType;
            props.setTheUser(localUser);
            props.setUseless(!props.useless);
            console.log(props.theUser);
           
        }
    }

    // profile photo
    const profilePhotoAction = async (action)=> {
        if(action == 'take'){
            console.log(action);
            let takeResult = await launchCamera();
            console.log(takeResult);
        } else {
            if(action == 'pick'){
                console.log(action);
                let pickResult = await launchImageLibrary(options);
               // setProfilePhoto(pickResult.assets[0].uri);
                setProfilePhoto('data:image/png;base64,' + pickResult.assets[0].base64);
               // console.log(pickResult.assets[0].base64);
                setShowPhotoMenu(false);
            }
        }
        
    }
    


    return (
        <View style={{ height: 'auto' }}>
            
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: bgColor.header, width: '100%', paddingTop: 13, paddingBottom: 13, justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ backgroundColor: 'pink', marginLeft: 5, borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, backgroundColor: '#1e2427', width: Dimensions.get('window').width / 4.5, height: Dimensions.get('window').height / 10, alignContent: 'center', justifyContent: 'center', overflow: 'hidden', borderColor: '#ffffff', borderWidth: 2.5 }} onPress={()=>{setShowPhotoMenu(!showPhotoMenu)}}>
                <Image style={{height: '100%', width: '100%', alignSelf: 'center', marginTop: profilePhoto ? 0 : 30}} source={profilePhoto ? {uri: profilePhoto} : defaultImage}/>
                </TouchableOpacity>
                <View style={{ backgroundColor: bgColor.header, alignSelf: 'center' }}>
                    <Text style={{ fontSize: 30, marginLeft: 1, color: '#FDFCFA' }}>{props.theUser ? props.theUser.name : null}</Text>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '50%', marginLeft: 1, marginTop: 5 }} />
                    <Text style={{ marginLeft: 1, margin: 8, fontSize: 24, color: '#FDFCFA' }}>{props.theUser ? props.theUser.schoolYear : null}</Text>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center', marginRight: 15, marginTop: 'auto', marginBottom: 'auto', marginLeft: 15,  }} onPress={() => setEditToggled(!editToggled)}>
                    <Icon name={"pencil"} color={'#FDFCFA'} size={25} />
                </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: bgColor.main, height: '100%', display: editToggled ? 'none' : 'flex' }}>
                <ScrollView style={{ backgroundColor: bgColor.main }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center' }}>
                        <Icon name={"checkbox"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Gifting: {props.theUser ? props.theUser.gifting.map((gift) => gift + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5, }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center' }}>
                        <Icon name={"compass"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Called to: {props.theUser ? props.theUser.calling : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5, }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center' }}>
                        <Icon name={"bulb"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Trained In: {props.theUser ? props.theUser.minTeam.map((min) => min + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5, }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center' }}>
                        <Icon name={"home"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Housing: {props.theUser ? props.theUser.housing.map((house) => house + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5, }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center'}}>
                        <Icon name={"mail"} color={'#6e7f80'} size={40} />
                        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Contact:{'\n'} {props.theUser ? props.theUser.email : null}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <ScrollView style={{ backgroundColor: '#ffffff', position: 'absolute', display: editToggled ? 'flex' : 'none', top: 110, width: '100%' }} contentContainerStyle={{ paddingBottom: 60, flexGrow: 1 }} contentInset={{ bottom: 570 }}>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center' }}>
                    <Icon name={"checkbox-outline"} color={'#6e7f80'} size={40} />
                    <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Gifting</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {listOfSpiritualGifts.map((gift) =>
                        <Button mode="contained" style={{ width: 'auto', alignSelf: 'flex-end', marginTop: '5%', marginRight: '.5%', marginLeft: '.5%' }} onPress={() => { addOrRemoveAttribute(gift, props.theUser.gifting, 'gifting'); }} color={props.theUser.gifting.includes(gift) ? '#174c4f' : 'grey'} labelStyle={{ fontSize: 11 }} key={listOfSpiritualGifts.indexOf(gift)}>
                            {gift}
                        </Button>
                    )}
                </View>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5 }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center' }}>
                    <Icon name={"compass-outline"} color={'#6e7f80'} size={40} />
                    <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Called to: </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {listOfCallings.map((gift) =>
                        <Button mode="contained" style={{ width: 'auto', alignSelf: 'flex-end', marginTop: '5%', marginRight: '.5%', marginLeft: '.5%' }} onPress={() => { addOrRemoveAttribute(gift, props.theUser.calling, 'calling') }} color={props.theUser.calling.includes(gift) ? '#174c4f' : 'grey'} labelStyle={{ fontSize: 11 }} key={listOfCallings.indexOf(gift)}>
                            {gift}
                        </Button>
                    )}
            </View>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5, }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center' }}>
                    <Icon name={"bulb-outline"} color={'#6e7f80'} size={40} />
                    <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Trained In: </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {listOfMinistryTeams.map((gift) =>
                    <Button mode="contained" style={{ width: 'auto', alignSelf: 'flex-end', marginTop: '5%', marginRight: '.5%', marginLeft: '.5%' }} onPress={() => { addOrRemoveAttribute(gift, props.theUser.minTeam, 'minTeam') }} color={props.theUser.minTeam.includes(gift) ? '#174c4f' : 'grey'} labelStyle={{ fontSize: 11 }} key={listOfMinistryTeams.indexOf(gift)}>
                        {gift}
                    </Button>
                )}
            </View>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5, }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center' }}>
                    <Icon name={"home-outline"} color={'#6e7f80'} size={40} />
                    <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Housing:</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {listOfGuestHostings.map((gift) =>
                    <Button mode="contained" style={{ width: 'auto', alignSelf: 'flex-end', marginTop: '5%', marginRight: '.5%', marginLeft: '.5%' }} onPress={() => { addOrRemoveAttribute(gift, props.theUser.housing, 'housing') }} color={props.theUser.housing.includes(gift) ? '#174c4f' : 'grey'} labelStyle={{ fontSize: 11 }} key={listOfGuestHostings.indexOf(gift)}>
                        {gift}
                    </Button>
                )}
            </View>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5, }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto', alignItems: 'center'}}>
                    <Icon name={"mail-outline"} color={'#6e7f80'} size={40} />
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Contact: </Text>
                        <TextInput style={{fontSize: 17, flex: 1}} onEndEditing={(e)=> {let localuser = props.theUser; localuser.email = e.nativeEvent.text; props.setTheUser(localuser); console.log(props.theUser); }}>{props.theUser ? props.theUser.email : null}</TextInput>
                    </View>
                </View>
            </ScrollView>
            <View style={{ display: showPhotoMenu ? 'flex' : 'none', position: 'absolute', bottom: 102, width: '100%', backgroundColor: '#1e2427', borderColor: 'grey', borderWidth: 3 }}>
                <TouchableOpacity onPress={() => { profilePhotoAction('take') }} style={{ height: 50, backgroundColor: '#fafafa', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <Icon name={"camera-outline"} color={'#6e7f80'} size={25} style={{marginLeft: 'auto', marginRight: 10 }}/>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto'}}>Take Photo</Text>
                </TouchableOpacity>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, height: .5, }} />
                <TouchableOpacity onPress={() => { profilePhotoAction('pick') }} style={{ height: 50, backgroundColor: '#fafafa', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <Icon name={"image-outline"} color={'#6e7f80'} size={25} style={{marginLeft: 'auto', marginRight: 10 }}/>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto' }}>Choose Photo From Library</Text>
                </TouchableOpacity>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, height: .5, }} />
                <TouchableOpacity onPress={() => { setShowPhotoMenu(false) }} style={{ height: 50, backgroundColor: '#fafafa', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <Icon name={"chevron-back-circle-outline"} color={'#6e7f80'} size={25} style={{marginLeft: 'auto', marginRight: 10 }}/>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto' }}>Cancel</Text>
                </TouchableOpacity>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5, }} />
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