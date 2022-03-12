import React from "react"
import { View, Text } from "react-native"
export function Error({error}) {
    return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', padding: 20}}>
        <Text style={{fontWeight: 'bold', color: 'red', textAlign: 'center'}}>{error.message}</Text>
    </View>
    );
}