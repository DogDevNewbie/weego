import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@fortawesome/fontawesome-free';

const ProfileTabs = ({name})=> {
    return (
        <View style = {styles.tabsContainer}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <View style = {styles.iconContainer}><MaterialIcons name="person" size={24} color="white" /></View>
                <Text style = {{fontSize: 18}}>{name}</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
        </View>
    )
}

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,

    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30, 
        width: 30, 
        backgroundColor: '#AC00FF', 
        borderRadius: 5,
        marginRight: 15,
    }
});

export default ProfileTabs;