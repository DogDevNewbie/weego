import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'



const bookings = [
    {
        name: 'Totoy Brown',
        message: 'Dito malapit sa kanto ng corner, sa sulok ng gilid. Nakablack ako na buhok.',
        image: 'https://preview.redd.it/yskaela-fujimoto-v0-7u0g3k70f93a1.jpg?width=640&crop=smart&auto=webp&s=d02fd4401de32af8e4434f58f7ac9b8b60627711',
        date: '26 SEP | 5:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00',
        distance: '7.5 KM',
        isPaymentMethodCash: true,
    },

    {
        name: 'Captain Barber',
        message: 'Dito malapit sa kanto ng corner, sa sulok ng gilid. Nakablack ako na buhok.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetmtbKM-22ZZ3eM-D_7D09rKGYcyS2uQa0g&usqp=CAU',
        date: '27 SEP | 6:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00',
        distance: '7.5 KM',
        isPaymentMethodCash: false,
    },

    {
        name: 'Juan Luna',
        message: 'Dito malapit sa kanto ng corner, sa sulok ng gilid. Nakablack ako na buhok.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetmtbKM-22ZZ3eM-D_7D09rKGYcyS2uQa0g&usqp=CAU',
        date: '26 SEP | 5:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00',
        distance: '7.5 KM',
        isPaymentMethodCash: false,
    },

    {
        name: 'Peter Pedro',
        message: 'Dito malapit sa kanto ng corner, sa sulok ng gilid. Nakablack ako na buhok.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetmtbKM-22ZZ3eM-D_7D09rKGYcyS2uQa0g&usqp=CAU',
        date: '26 SEP | 5:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00',
        distance: '7.5 KM',
        isPaymentMethodCash: true,
    },

    {
        name: 'Kobe Bryant',
        message: 'Dito malapit sa kanto ng corner, sa sulok ng gilid. Nakablack ako na buhok.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetmtbKM-22ZZ3eM-D_7D09rKGYcyS2uQa0g&usqp=CAU',
        date: '26 SEP | 5:14 PM',
        trackNo: 'ABC-1234-5678',
        pickUp: '599 San Rafael, Bulacan',
        destination: '143 Baliwag, Bulacan',
        fare: '250.00',
        distance: '7.5 KM',
        isPaymentMethodCash: false,
    },
];


const CashPaymentMethod = () => {
    return (
        <View style = {{width: 80,marginTop: 7, padding: 5, backgroundColor: '#04BD00', alignItems: 'center', borderRadius: 5,}}>
            <Text style = {{color: 'white'}}>CASH</Text>
        </View>
    )
}

const GCashPaymentMethod = () => {
    return (
        <View style = {{width: 80,marginTop: 7, padding: 5, backgroundColor: '#00A3FF', alignItems: 'center', borderRadius: 5,}}>
            <Text style = {{color: 'white'}}>G-CASH</Text>
        </View>
    )
}


const BookCard = () => {
    const handlePress = () => {
        // Handle button press here
    };


    return (
        <View style = {styles.section}>
            {bookings.map((booking, index) => (
                <View style = {styles.cardContainer} key={index}>
                    <View style = {styles.cardHeader}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style = {styles.imageContainer}>
                                <Image
                                    source={{
                                        uri: booking.image
                                    }}
                                    style={{width: '100%', height: '100%'}}
                                />
                            </View>
                            <View>
                                <Text style = {{fontWeight: 'bold', fontSize: 18}}>{booking.name}</Text>
                                {booking.isPaymentMethodCash ? <CashPaymentMethod/> : <GCashPaymentMethod/>}
                            </View>
                        </View>
                        
                        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <Text style = {{fontWeight: 'bold', fontSize: 22}}>{booking.distance}</Text>
                        </View>
                    </View>

                    <View style = {styles.cardBody}>
                        <View style = {{marginBottom: 10}}>
                            <Text style = {{color: 'gray', marginBottom: 5}}>Pick up</Text>
                            <Text style = {styles.boldText}>{booking.pickUp}</Text>
                        </View>
                        <View style = {{marginBottom: 10}}>
                            <Text style = {{color: 'gray', marginBottom: 5}}>Destination</Text>
                            <Text style = {styles.boldText}>{booking.destination}</Text>
                        </View>
                        <View style = {{marginBottom: 10}}>
                            <Text style = {{color: 'gray', marginBottom: 5}}>Message</Text>
                            <Text style = {styles.boldText}>{booking.message}</Text>
                        </View>
                        <TouchableOpacity onPress={handlePress} style={styles.button}>
                            <Text style={styles.buttonText}>Accept</Text>
                        </TouchableOpacity>
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

    //css for bookcard
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
        borderColor: '8E8E8E',
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
    },
    imageContainer: {
        height: '100%',
        marginRight: 10,
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },

    //css for button
    button: {
        backgroundColor: '#AC00FF',
        padding: 10,
        borderRadius: 5,
        marginTop: 25,
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})



export default BookCard