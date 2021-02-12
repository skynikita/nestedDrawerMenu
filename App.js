
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {drawerItemsMain} from './drawerItemsMain';
import CustomDrawerContent from './CustomDrawerContent.js';
import CustomHeader from './CustomHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

function Settings1Screen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Settings 1 Screen</Text>
        </View>
    );
}

function Settings2Screen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Settings 2 Screen</Text>
        </View>
    );
}

function Project1Screen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Project 1 Screen</Text>
        </View>
    );
}

function Project2Screen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Project 2 Screen</Text>
        </View>
    );
}

function Project3Screen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Project 3 Screen</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile</Text>
        </View>
    );
}

function MainDrawerNavigation() {
    return (
        <Drawer.Navigator
            drawerType='permanent'
            initialRouteName="Home"
            drawerContent={(props) => (
                <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
            )}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Project1" component={Project1Screen} />
            <Drawer.Screen name="Project2" component={Project2Screen} />
            <Drawer.Screen name="Project3" component={Project3Screen} />
            <Drawer.Screen name="Settings1" component={Settings1Screen} />
            <Drawer.Screen name="Settings2" component={Settings2Screen} />
        </Drawer.Navigator>
    );
}
 function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: '#404554',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    header: (props) => {
                        return <CustomHeader {...props} />;
                    },
                }}>
                <Stack.Screen name="MainDrawer" component={MainDrawerNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({});

export default App;

