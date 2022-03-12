import { 
    Text, 
    View, 
    FlatList, 
    TouchableOpacity, 
    Image, 
    StyleSheet 
} from "react-native"
import { CONSTANTS } from "../utils/constants";


const ContractorDetailScreen = ({navigation, route}) => {
    const { item } = route.params;
    return <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    name: {
        fontSize: 22,
        fontWeight: '700',
    },
    jobTitle: {
        fontSize: 18,
        opacity: .7
    },
    image: {
        width: CONSTANTS.AVATAR_SIZE * 2,
        height: CONSTANTS.AVATAR_SIZE * 2,
        borderRadius: CONSTANTS.AVATAR_SIZE * 2,
    },
    email: {
        fontSize: 14,
        opacity: .8,
        color: '#0099cc'
    }
})

export default ContractorDetailScreen;