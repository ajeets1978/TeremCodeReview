import React from "react"
import { View, Text } from "react-native"
export function Loading() {
    return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', padding: 20}}>
        <Text style={{fontWeight: 'bold', color: 'red', textAlign: 'center'}}>Loading...</Text>
    </View>
    );
}