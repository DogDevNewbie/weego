import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import HistoryCard from '../components/HistoryCard'
import HistoryDashInfo from '../components/HistoryDashInfo'

const History = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 40}}>
            <HistoryDashInfo/>
            <ScrollView>
                <HistoryCard/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default History