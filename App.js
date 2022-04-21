import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Loading from './components/Loading';
import blklogo from './assets/photos/alumni-logo-blk.png';
import whtlogo from './assets/photos/alumnimap_outermarker.png';
import Login from './components/Login';
import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Events from './components/Events';
import { eventData } from './components/SampleEventData';
import EventTemplate from './components/EventTemplate';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);

  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Login">{() => <Login/>}</Stack.Screen>
        {eventData.map((item)=>{
          return(
            <Stack.Screen name={item.slug} component={EventTemplate} key={eventData.indexOf(item)} />
          );
        })}
      </Stack.Navigator>
    );
  }



  function MyTabs() {
    return (
      <Tab.Navigator initialRouteName={Home} screenOptions={{ tabBarStyle: { backgroundColor: '#1e2427' }, tabBarBadgeStyle: { color: '#d3d3d3' }, headerShown: false, tabBarActiveTintColor: '#6e7f80', tabBarInactiveTintColor: 'grey' }}>
        <Tab.Screen name="Map" options={{
          tabBarLabel: 'MAP',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? "navigate" : "navigate-outline"} color={focused ? '#6e7f80' : "#d3d3d3"} size={30} />
          ),
        }}>{() => <Home/>}</Tab.Screen>
         <Tab.Screen name="Events" options={{
          tabBarLabel: 'EVENTS',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? "time" : "time-outline"} color={focused ? '#6e7f80' : "#d3d3d3"} size={30} />
          ),
        }}>{() => <Events/>}</Tab.Screen>
        <Tab.Screen name="Profile" options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? "person" : "person-outline"} color={focused ? '#6e7f80' : "#d3d3d3"} size={30} />
          ),
        }}>{() => <Profile/>}</Tab.Screen>
        <Tab.Screen name="Settings" options={{
          tabBarLabel: 'SETTINGS',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? "settings" : "settings-outline"} color={focused ? '#6e7f80' : "#d3d3d3"} size={30} />
          ),
        }}>{() => <Settings/>}</Tab.Screen>
       


      </Tab.Navigator>
    );
  }
  if (!loading) {
    if (user) {
      return (
        <NavigationContainer>
         <PaperProvider>
            <SafeAreaView style={styles.container}>
              <View style={styles.container}>
                <Image source={whtlogo} style={styles.header} />
              </View>
            </SafeAreaView>
            <MyStack />
          </PaperProvider>
        </NavigationContainer>
      );
    } else {

      return (
        <NavigationContainer>
          <SafeAreaView style={{ backgroundColor: '#1e2427' }}>
            <Login setTheUser={setUser}/>
          </SafeAreaView>
        </NavigationContainer>
      );
    } 
  } 
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e2427',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingBottom: '2%'
  },
  header: {
    height: 100,
    width: 200,
    marginTop: 7,
    marginBottom: 7,
    resizeMode: 'contain'
  },
});

export default App;
