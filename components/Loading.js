import React from "react";
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';


export default function Loading(){
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1e2427" }}>
          <Text style={{ color: "#ffffff", fontSize: 27 }}>Loading</Text>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
    );
}