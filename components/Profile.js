import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';


export default function Profile(props) {

    const [bgColor, setBgColor] = useState({ header: '#174c4f', main: '#1e2427' });
    const [editToggled, setEditToggled] = useState(false);

    const listOfSpiritualGifts = ['Healing', 'Prophetic', 'Word of Knowledge', 'Miracles', 'Faith', 'Preaching', 'Teaching', 'Evangelism', 'Missions', 'Mystic', 'Discernment', 'Dance/Flagging', 'Worship'];
    const listOfCallings = ['Church', 'Education', 'Media', 'Family', 'Arts', 'Politics', 'Business', 'Medical', 'Sports', 'Science', 'Technology'];
    const listOfGuestHostings = ['Daytime Visitors', 'Couch Space', 'Floor Space', 'Guest Room', 'Other'];
    const listOfMinistryTeams = ['Transition Mentor', 'Healing Room Ministry', 'Prophetic Ministry', 'SOZO Ministry', 'Coaching Ministry', 'Other'];

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

    return (
        <View style={{ height: 'auto' }}>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: bgColor.header, width: '100%', paddingTop: 13, paddingBottom: 13, justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: bgColor.header }}>
                    <Text style={{ fontSize: 30, marginLeft: 20, color: '#FDFCFA' }}>{props.theUser ? props.theUser.name : null}</Text>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '50%', marginLeft: 20, marginTop: 5 }} />
                    <Text style={{ marginLeft: 20, margin: 8, fontSize: 24, color: '#FDFCFA' }}>{props.theUser ? props.theUser.schoolYear : null}</Text>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center', marginRight: 40, marginTop: 'auto', marginBottom: 'auto' }} onPress={() => setEditToggled(!editToggled)}>
                    <Icon name={"pencil"} color={'#FDFCFA'} size={25} />
                </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: bgColor.main, height: '100%', display: editToggled ? 'none' : 'flex' }}>
                <ScrollView style={{ backgroundColor: bgColor.main }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto' }}>
                        <Icon name={"checkbox"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Gifting: {props.theUser ? props.theUser.gifting.map((gift) => gift + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5, }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                        <Icon name={"compass"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Called to: {props.theUser ? props.theUser.calling : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5, }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                        <Icon name={"bulb"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Trained In: {props.theUser ? props.theUser.minTeam.map((min) => min + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5, }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                        <Icon name={"home"} color={'#6e7f80'} size={40} />
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Housing: {props.theUser ? props.theUser.housing.map((house) => house + ', ') : null}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#FDFCFA', width: '100%', marginLeft: 0, marginTop: 5, height: .5, }} />
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, }}>
                        <Icon name={"mail"} color={'#6e7f80'} size={40} />
                        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#FDFCFA', fontWeight: "600", flex: 1, }}>Contact:{'\n'} {props.theUser ? props.theUser.email : null}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <ScrollView style={{ backgroundColor: '#ffffff', position: 'absolute', display: editToggled ? 'flex' : 'none', top: 110, width: '100%' }} contentContainerStyle={{ paddingBottom: 60, flexGrow: 1 }} contentInset={{ bottom: 570 }}>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, height: 'auto' }}>
                    <Icon name={"checkbox-outline"} color={'#6e7f80'} size={40} />
                    <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Gifting</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {listOfSpiritualGifts.map((gift) =>
                        <Button mode="contained" style={{ width: 'auto', alignSelf: 'flex-end', marginTop: '5%', marginRight: '.5%', marginLeft: '.5%' }} onPress={() => { addOrRemoveAttribute(gift, props.theUser.gifting, 'gifting'); }} color={props.theUser.gifting.includes(gift) ? '#174c4f' : 'grey'} labelStyle={{ fontSize: 11 }}>
                            {gift}
                        </Button>
                    )}
                </View>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5 }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                    <Icon name={"compass-outline"} color={'#6e7f80'} size={40} />
                    <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Called to: </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {listOfCallings.map((gift) =>
                        <Button mode="contained" style={{ width: 'auto', alignSelf: 'flex-end', marginTop: '5%', marginRight: '.5%', marginLeft: '.5%' }} onPress={() => { addOrRemoveAttribute(gift, props.theUser.calling, 'calling') }} color={props.theUser.calling.includes(gift) ? '#174c4f' : 'grey'} labelStyle={{ fontSize: 11 }}>
                            {gift}
                        </Button>
                    )}
            </View>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5, }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                    <Icon name={"bulb-outline"} color={'#6e7f80'} size={40} />
                    <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Trained In: </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {listOfMinistryTeams.map((gift) =>
                    <Button mode="contained" style={{ width: 'auto', alignSelf: 'flex-end', marginTop: '5%', marginRight: '.5%', marginLeft: '.5%' }} onPress={() => { addOrRemoveAttribute(gift, props.theUser.minTeam, 'minTeam') }} color={props.theUser.minTeam.includes(gift) ? '#174c4f' : 'grey'} labelStyle={{ fontSize: 11 }}>
                        {gift}
                    </Button>
                )}
            </View>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5, }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20 }}>
                    <Icon name={"home-outline"} color={'#6e7f80'} size={40} />
                    <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Housing:</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {listOfGuestHostings.map((gift) =>
                    <Button mode="contained" style={{ width: 'auto', alignSelf: 'flex-end', marginTop: '5%', marginRight: '.5%', marginLeft: '.5%' }} onPress={() => { addOrRemoveAttribute(gift, props.theUser.housing, 'housing') }} color={props.theUser.housing.includes(gift) ? '#174c4f' : 'grey'} labelStyle={{ fontSize: 11 }}>
                        {gift}
                    </Button>
                )}
            </View>
                <Divider style={{ backgroundColor: '#1e2427', width: '100%', marginLeft: 0, marginTop: '7%', height: .5, }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 5, marginRight: 20, }}>
                    <Icon name={"mail-outline"} color={'#6e7f80'} size={40} />
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ marginLeft: 10, margin: 8, fontSize: 20, color: '#1e2427', fontWeight: "600", flex: 1, }}>Contact: </Text>
                        <TextInput style={{fontSize: 17, flex: 1}} onEndEditing={(e)=> {let localuser = props.theUser; localuser.email = e.nativeEvent.text; props.setTheUser(localuser); console.log(props.theUser); }}>{props.theUser ? props.theUser.email : null}</TextInput>
                    </View>
                </View>
            </ScrollView>


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