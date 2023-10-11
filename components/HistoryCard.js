import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const histories = [
    {
        name: 'Totoy Brown',
        date: '26 SEP | 5:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00'
    },

    {
        name: 'Captain Barber',
        date: '27 SEP | 6:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00'
    },
    
    {
        name: 'Juan Luna',
        date: '26 SEP | 5:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00'
    },

    {
        name: 'Peter Pedro',
        date: '26 SEP | 5:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00'
    },

    {
        name: 'Kobe Bryant',
        date: '26 SEP | 5:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00'
    },
];


const HistoryCard= () => {
    return (
        <View style = {styles.section}>
        {histories.map((history, index) => (
            <View style = {styles.cardContainer} key={index}>
            <View style = {styles.cardHeader}>
                <View style={{flex: 3}}>
                <Text style = {{fontWeight: 'bold', fontSize: 18}}>{history.date}</Text>
                <Text style = {{fontSize: 18, marginTop: 5}}>{history.trackNo}</Text>
                </View>
                <View style={{flex: 3, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 18}}>{history.name}</Text>
                </View>
            </View>

            <View style = {styles.cardBody}>
                <View style = {{marginBottom: 10}}>
                <Text style = {{color: 'gray', marginBottom: 5}}>Pick up</Text>
                <Text style = {styles.boldText}>{history.pickUp}</Text>
                </View>
                <View style = {{marginBottom: 10}}>
                <Text style = {{color: 'gray', marginBottom: 5}}>Destination</Text>
                <Text style = {styles.boldText}>{history.destination}</Text>
                </View>
                <View style = {{marginBottom: 10}}>
                <Text style = {{color: 'gray', marginBottom: 5}}>Final Fare</Text>
                <Text style = {styles.boldText}>{history.fare}</Text>
                </View>
            </View>

            </View> 

        ))}
        </View>
    )
}

const styles = StyleSheet.create({
    //global like css
    boldText: {
        fontWeight: 'bold',
        fontSize: 18
    },

    //css for historycard
    section: {
        flex: 1,
        padding: 20,
    },
    cardContainer: {
        marginBottom: 20,
        shadowOffset: 10
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#8E8E8E',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FCF5FF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardBody: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})

export default HistoryCard;
