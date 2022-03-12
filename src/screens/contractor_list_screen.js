import { useQuery } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { gql } from "@apollo/client";
import { 
    Text, 
    View, 
    FlatList, 
    TouchableOpacity, 
    Image, 
    StyleSheet 
} from "react-native"

import { CONTRACTORS } from "../data/data";
import { GQL_CONTRACTORS } from "../graphql/query";
import { CONSTANTS } from "../utils/constants";
import { Error } from "../components/error";
import { Loading } from "../components/loading";


const ContractorListScreen = ({navigation}) => {

    const { loading, error, data } = useQuery(GQL_CONTRACTORS);
    if(loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }
    
    return (
        <View style={{
            flexDirection:'row', padding: CONSTANTS.SPACING, marginBottom: CONSTANTS.SPACING,
            borderRadius: 12, backgroundColor: 'rgba(255,255,255, 0.8)',
            shadowColor: "#000"
        }}>
            <FlatList
            data = {data.contractors}
            keyExtractor={item => item.id.toString()}
            renderItem = {({item}) => {
                return <TouchableOpacity onPress={() => navigation.navigate('ContractorDetailScreen', {item})}>
                <View style={{flexDirection:'row'}}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View style={{marginLeft: CONSTANTS.SPACING}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
                </View>
                </TouchableOpacity>
            }}
            ></FlatList>
        </View>
    );

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
    }
})

export default ContractorListScreen;