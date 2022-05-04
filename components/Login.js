import React, { useState } from "react";
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-paper';
import logo from '../assets/photos/mapgeneric.png';

export default function Login(props){
    const [showRegistration, setShowRegistration] = useState(false);
    const [showPwReset, setShowPwReset] = useState(false);
    const [registrationEmail, setRegistrationEmail] = useState();
    const [registrationPassword, setRegistrationPassword] = useState();
    const [registrationPasswordTwo, setRegistrationPasswordTwo] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPw, setUserPw] = useState();
    const [pwResetEmail, setPwResetEmail] = useState();
    const [emailChk, setEmailChk] = useState(false);
    const [pwChk, setPwChk] = useState(false);
    const [pwSameChk, setPwSameChk] = useState(false);


    return(
        <SafeAreaView style={{ alignContent: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#20232c' }}>
            <View style={{marginTop: '40%', marginBottom: 'auto'}}>
            <Image source={logo} style={{ height: 150, width: 300, resizeMode: 'contain', alignSelf: 'center'}} />
            <TextInput
                    style={{ height: 40, margin: 30, borderWidth: 1, padding: 10, backgroundColor: 'white', fontSize: 19, textAlign: 'center', marginBottom: 0, marginTop: 30 }}
                    placeholder="Email"
                    autoComplete="email"
                    keyboardType="email-address"
                    returnKeyType="done"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    autoCorrect={false}
                  //  onChangeText={setUserEmail}
                    
                />
                <TextInput
                    style={{ height: 40, margin: 30, borderWidth: 1, padding: 10, backgroundColor: 'white', fontSize: 19, textAlign: 'center', marginBottom: 0, marginTop: 15 }}
                    placeholder="Password"
                    keyboardType="default"
                    returnKeyType="done"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                  //  onChangeText={setUserPw}

                />
                <TouchableOpacity onPress={()=> console.log('reset password needs func')}><Text style={{color: 'white', textAlign: 'center', marginTop: '5%'}}>Forgot Password?</Text></TouchableOpacity>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>
                    <Button mode="contained" style={{ width: 110, alignSelf: 'flex-start', marginTop: '5%' }} onPress={() => setShowRegistration(true)}>
                        Register
                    </Button>
                    <Button mode="contained" style={{ width: 110, alignSelf: 'flex-end', marginTop: '5%' }} onPress={() => { props.setTheUser({name: 'Caleb Smith', email: 'calebjoelsmith@gmail.com', gifting: ['Prophetic', 'Worship', 'Teaching', 'Healing'], minTeam: ['Healing Room Ministry', 'Prophetic Ministry', 'SOZO Ministry'], housing: ['Daytime Visitors', 'Other'], schoolYear: '1st Year', calling: ['Church'] }) }} color='#2196F3'>
                        Login
                    </Button>
                </View>

            </View>

            <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#20232c', position: 'absolute', top: 0, left: 0, display: showRegistration ? 'flex' : "none" }}>
                <Image source={logo} style={{ height: 100, width: 300, marginTop: '30%', marginBottom: 7, resizeMode: 'contain', alignSelf: 'center' }} />
                
                
                
                <View style={{display: true ? 'flex' : 'none'}}>
                <Text style={{ paddingTop: '5%', textAlign: 'center', fontSize: 25, paddingLeft: '10%', paddingRight: '10%', color: '#bcc6df' }}>Register for an Account</Text>
                <TextInput
                    style={{ height: 40, margin: 30, borderWidth: 1, padding: 10, backgroundColor: 'white', fontSize: 19, textAlign: 'center', marginBottom: 0, marginTop: 18 }}
                    placeholder="Email"
                    autoComplete="email"
                    keyboardType="email-address"
                    returnKeyType="done"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    autoCorrect={false}
                //    onChangeText={setRegistrationEmail}
                 //   onEndEditing={()=>isUnValid(registrationEmail)}
                />
                <TextInput
                    style={{ height: 40, margin: 30, borderWidth: 1, padding: 10, backgroundColor: 'white', fontSize: 19, textAlign: 'center', marginBottom: 0, marginTop: 15 }}
                    placeholder="Password"
                    keyboardType="default"
                    returnKeyType="done"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                 //   onChangeText={setRegistrationPassword}
                 //   onEndEditing={isPwValid}
                />
                <TextInput
                    style={{ height: 40, margin: 30, borderWidth: 1, padding: 10, backgroundColor: 'white', fontSize: 19, textAlign: 'center', marginBottom: 0, marginTop: 15 }}
                    placeholder="Re-Enter Password"
                    keyboardType="default"
                    returnKeyType="done"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                 //   onChangeText={setRegistrationPasswordTwo}
                  //  onEndEditing={isPwSame}
                />
                <TextInput
                    style={{ height: 40, margin: 30, borderWidth: 1, padding: 10, backgroundColor: 'white', fontSize: 19, textAlign: 'center', marginBottom: 0, marginTop: 15 }}
                    placeholder="Verification Code"
                    keyboardType="default"
                    returnKeyType="done"
                    autoCapitalize="none"
                    autoCorrect={false}
                 //   onChangeText={setRegistrationPasswordTwo}
                  //  onEndEditing={isPwSame}
                />
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 30, marginRight: 30, alignContent: 'space-between', marginTop: 35 }}>
                    <Button mode="contained" color="#bcc6df" style={{ width: 120, marginTop: 15, marginRight: 'auto', alignSelf: 'flex-start' }} onPress={() => setShowRegistration(false)}>
                        Go Back
                    </Button>
                    <Button mode="contained" style={{ width: 110, alignSelf: 'flex-start', marginTop: '5%' }} onPress={() => console.log('register func')}>
                        Register
                    </Button>
                </View>
                
            </View>
                </View>
                
            <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#20232c', position: 'absolute', top: 0, left: 0, display: showPwReset ? 'flex' : "none" }}>
                <Image source={logo} style={{ height: 100, width: 300, marginTop: 7, marginBottom: 7, resizeMode: 'contain', alignSelf: 'center' }} />
                
                <Text style={{ paddingTop: '5%', textAlign: 'center', fontSize: 25, paddingLeft: '10%', paddingRight: '10%', color: '#bcc6df' }}>Reset Your Password</Text>
                <TextInput
                    style={{ height: 40, margin: 30, borderWidth: 1, padding: 10, backgroundColor: 'white', fontSize: 19, textAlign: 'center', marginBottom: 0, marginTop: 18 }}
                    placeholder="Email"
                    autoComplete="email"
                    keyboardType="email-address"
                    returnKeyType="done"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    autoCorrect={false}
                  //  onChangeText={setPwResetEmail}
                 //   onEndEditing={()=>isUnValid(pwResetEmail)}
                />

                <View style={{ width: '100%', paddingRight: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="contained" color="#bcc6df" style={{ width: 120, marginTop: 25, marginLeft: 30 }} onPress={() => setShowPwReset(false)}>
                        Go Back
                    </Button>
                    <Button mode="contained" style={{ width: 'auto', marginTop: 25, marginLeft: 10, alignSelf: 'flex-end' }} onPress={() => {console.log('password reset functions here')}}>
                        Send Reset Link
                    </Button>
                </View>

            </View>
        </SafeAreaView>
 
    );
}

