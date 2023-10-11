import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import BookCard from '../components/BookCard'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 40}}>
            <ScrollView>
                <BookCard/>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home