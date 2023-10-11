import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';

import {Home, Profile, History} from './screens'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';




const Tab = createBottomTabNavigator(); 
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  headerStyle: { backgroundColor: '#AC00FF' },
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    height: 60,
    background: "#fff"
  }
}




export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Dashboard"
          component={Home}
          options={{
            tabBarIcon: ({focused}) =>{
              return(
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons name="home" size={24} color={focused ? "#AC00FF" : "#111"}/>
                  <Text style= {{fontSize: 12, color: "#16247d"}}>HOME</Text>
                </View>
              )
            }
          }}
        />

        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({focused}) =>{
              return(
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons name="history" size={24} color={focused ? "#AC00FF" : "#111"}/>
                  <Text style= {{fontSize: 12, color: "#16247d"}}>HISTORY</Text>
                </View>
              )
            }
          }}
        />

        <Tab.Screen
          name="Account Information"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) =>{
              return(
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons name="person" size={24} color={focused ? "#AC00FF" : "#111"}/>
                  <Text style= {{fontSize: 12, color: "#16247d"}}>PROFILE</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator >
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});