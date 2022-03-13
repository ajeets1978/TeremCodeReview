import { useQuery } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { gql, useSubscription } from "@apollo/client";
import { 
    Text, 
    View, 
    FlatList, 
    TouchableOpacity, 
    Image, 
    StyleSheet,
    SafeAreaView
} from "react-native"

import { GQL_CONTRACTORS } from "../graphql/query";
import { CONSTANTS } from "../utils/constants";
import { Error } from "../components/error";
import { Loading } from "../components/loading";
import { FAB, Button } from "react-native-paper";

const ContractorListScreen = ({navigation}) => {

    const {loading, error, data} = useQuery(GQL_CONTRACTORS);
    

    if(loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <SafeAreaView style={{
            flexDirection:'row', padding: CONSTANTS.SPACING, marginBottom: CONSTANTS.SPACING,
            borderRadius: 12, backgroundColor: 'rgba(255,255,255, 0.8)',
            shadowColor: "#000"
        }}>
            <FlatList
            data = {data.contractors}
            keyExtractor={item => item.id.toString()}
            renderItem = {({item}) => {
                return  <TouchableOpacity onPress={() => navigation.navigate('ContractorDetailScreen', {item})}>
                <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View style={{marginLeft: CONSTANTS.SPACING}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
                <Button icon="account-minus" onPress={() => console.log("Delete operation")}/>
                </View>
                </TouchableOpacity>
            }}
            ></FlatList>
            <FAB 
                style={styles.addButton} 
                label="Add Contractor"
                icon= "plus"
                onPress={() => {navigation.navigate('AddContractorScreen')}}

            />
        </SafeAreaView>
    );

};

// TODO: Add contractor
function addContractor () {
    console.log('Add contractors');
};

const styles = StyleSheet.create({
    name: {
        fontSize: 22,
        fontWeight: '700',
    },
    jobTitle: {
        fontSize: 18,
        opacity: .7
    },
    image: {
        width: CONSTANTS.AVATAR_SIZE,
        height: CONSTANTS.AVATAR_SIZE,
        borderRadius: CONSTANTS.AVATAR_SIZE,
    },
    email: {
        fontSize: 14,
        opacity: .8,
        color: '#0099cc'
    },
    addButton: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

export default ContractorListScreen;