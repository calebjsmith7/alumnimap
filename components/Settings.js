import React from 'react';
import { 
    View,
    Text,
    ScrollView
} from 'react-native';
import Checkboxes from './Checkbox';

export default function Settings(props) {
    const listOfSpiritualGifts = ['Healing', 'Prophetic', 'Word of Knowledge', 'Miracles', 'Faith', 'Preaching', 'Teaching', 'Evangelism', 'Missions', 'Mystic', 'Discernment', 'Dance/Flagging', 'Worship'];
    const listOfCallings = ['Church', 'Education', 'Media', 'Family', 'Arts', 'Politics', 'Business', 'Medical', 'Sports', 'Science', 'Technology'];
    const listOfGuestHostings = ['Daytime Visitors', 'Couch Space', 'Floor Space', 'Guest Room', 'Other'];
    const listOfMinistryTeams = ['Transition Mentor', 'Healing Room Ministry', 'Prophetic Ministry', 'SOZO Ministry', 'Coaching Ministry', 'Other'];
    const listOfChurchVisible = ['Show Alumni Only', 'Show Ministries Only'];
    


    
    


    return (
        <ScrollView>
            <Text style={{ textAlign: 'left', margin: '5%', marginBottom: '1%', fontSize: 16, fontWeight: '600' }}>Map Settings</Text>
            <Text style={{ textAlign: 'left', margin: '3%', marginLeft: '5%', fontSize: 25, color: '#174c4f' }}>Sort by Gifting Type</Text>
            <View style={{marginLeft: '5%', height: 'auto', maxHeight: 250, flexWrap: 'wrap', marginBottom: '5%'}}>
                {listOfSpiritualGifts.map((item)=>{
                    let index = listOfSpiritualGifts.indexOf(item);
                    return(
                        <Checkboxes name={item} list={props.comboList} setList={props.setComboList} key={index} margin={'3%'}/>
                    );
                })}
            </View>
            <Text style={{ textAlign: 'left', margin: '3%', marginLeft: '5%', fontSize: 25, color: '#174c4f' }}>Sort by Calling</Text>
            <View style={{marginLeft: '5%', height: 'auto', maxHeight: 250, flexWrap: 'wrap', marginBottom: '5%'}}>
                {listOfCallings.map((item)=>{
                    let index = listOfCallings.indexOf(item);
                    return(
                        <Checkboxes name={item} list={props.comboList} setList={props.setComboList} key={index} margin={'5%'}/>
                    );
                })}
            </View>
            <Text style={{ textAlign: 'left', margin: '3%', marginLeft: '5%', fontSize: 25, color: '#174c4f' }}>Sort by Guest Hosting Available</Text>
            <View style={{marginLeft: '5%', height: 'auto', maxHeight: 250, flexWrap: 'wrap', marginBottom: '5%'}}>
                {listOfGuestHostings.map((item)=>{
                    let index = listOfGuestHostings.indexOf(item);
                    return(
                        <Checkboxes name={item} list={props.comboList} setList={props.setComboList} key={index} margin={'5%'}/>
                    );
                })}
            </View>
            <Text style={{ textAlign: 'left', margin: '3%', marginLeft: '5%', fontSize: 25, color: '#174c4f' }}>Sort by Ministry Team Trained</Text>
            <View style={{marginLeft: '5%', height: 'auto', maxHeight: 250, flexWrap: 'wrap', marginBottom: '20%'}}>
                {listOfMinistryTeams.map((item)=>{
                    let index = listOfMinistryTeams.indexOf(item);
                    return(
                        <Checkboxes name={item} list={props.comboList} setList={props.setComboList} key={index} margin={'5%'}/>
                    );
                })}
            </View>
            <Text style={{ textAlign: 'left', margin: '3%', marginLeft: '5%', fontSize: 25, color: '#174c4f' }}>Sort by Type</Text>
            <View style={{marginLeft: '5%', height: 'auto', maxHeight: 250, flexWrap: 'wrap', marginBottom: '20%'}}>
                {listOfChurchVisible.map((item)=>{
                    let index = listOfChurchVisible.indexOf(item);
                    return(
                        <Checkboxes name={item} list={props.comboList} setList={props.setComboList} key={index} margin={'5%'}/>
                    );
                })}
            </View>
            
            
        </ScrollView>
    );
}