import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home/Home';
import NewContact from './pages/Contacts/NewContacts/NewContact';
import ListContacts from './pages/Contacts/ListContacts/ListContacts';
import ShowContact from './pages/Contacts/ShowContact/ShowContact';
import ListEmergencyContacts from './pages/EmergencyContacts/ListEmergencyContacts/ListEmergencyContacts';
import CameraScreen from './pages/Camera/Camera';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Home" component={Home} />                    
                <AppStack.Screen name="NewContact" component={NewContact} />
                <AppStack.Screen name="ListContacts" component={ListContacts} /> 
                <AppStack.Screen name="ShowContact" component={ShowContact} />    
                <AppStack.Screen name="ListEmergencyContacts" component={ListEmergencyContacts} />  
                <AppStack.Screen name="Camera" component={CameraScreen} />                 
            </AppStack.Navigator>
        </NavigationContainer>
    );
}