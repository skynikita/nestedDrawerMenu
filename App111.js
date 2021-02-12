import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View,Button,Animated } from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { createBottomTabNavigator } from 'react-navigation-tabs'




const data = [{
    value: 'Banana',
}, {
    value: 'Mango',
}, {
    value: 'Pear',
}];

function Monday() {
        return(
            <View style={styles.container}>
                <Text>Monday Blues</Text>
            </View>
        )

}

function Tuesday() {
    return(
        <View style={styles.container}>
            <Text>Tuesday Blues</Text>
        </View>
    )
}

function Wednesday() {
    return(
        <View style={styles.container}>
            <Text>Wednesday Blues</Text>
        </View>
    )
}


function HomeScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            onPress={() => navigation.navigate('Notifications')}
            title="Go to notifications"
        />
      </View>
  );
}

function handleOnClick(){
    return (
        <Dropdown
            data={data}
        />
    )
}
/*
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label='hi' onPress={alert('hi'
            )} />


        </DrawerContentScrollView>
    );
}*/

function CustomDrawerContent() {
    return (
        <Dropdown
            label="hello"
            data={data}
        />
    );
}

function NotificationsScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
  );
}

const WeekDays = createBottomTabNavigator(
    {
        Monday,
        Tuesday,
        Wednesday,
    }
)

const Drawer = createDrawerNavigator();


export default function Appt() {

    return (
      <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Home"  drawerType='permanent'>
          <Drawer.Screen
              options={{
              drawerIcon: config => <Icon
    size={23}
    name='ios-home'/>
          }} name="Home" component={HomeScreen} drawerIcon="ios-person" />
          <Drawer.Screen
              options={{
                  drawerIcon: config => <Icon
    size={23}
    name='ios-alert'/>
              }}
              name="Notifications" component={NotificationsScreen} />

        </Drawer.Navigator>
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
