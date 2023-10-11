import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProfileTabs from '../components/ProfileTabs'

const Profile = () => {
    return (
        <View style = {styles.profileSection}>
            <ProfileTabs name = "Personal Information"/>
            <ProfileTabs name = "Help"/>
            <ProfileTabs name = "About"/>
            <ProfileTabs name = "Settings"/>
            <ProfileTabs name = "Logout"/>
        </View>
    )
}

const styles = StyleSheet.create({
    profileSection: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default Profile