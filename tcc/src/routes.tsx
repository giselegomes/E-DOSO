import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home/Home';
import NewContact from './pages/Contacts/NewContacts/NewContact';
import ListContacts from './pages/Contacts/ListContacts/ListContacts';
import ShowContact from './pages/Contacts/ShowContact/ShowContact';
import NewMedicine from './pages/MedicineManagement/NewMedicine/NewMedicine';
import ListMedicine from './pages/MedicineManagement/ListMedicine/ListMedicine';
import ListEmergencyContacts from './pages/EmergencyContacts/ListEmergencyContacts/ListEmergencyContacts';
import CameraScreen from './pages/Camera/Camera';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: true, headerStyle: {backgroundColor:"purple"},headerTintColor:"white",headerTitleStyle:{fontSize:32,paddingLeft:20}}}>
                <AppStack.Screen name="Home" component={Home} options={{title:"E-Doso"}} />                    
                <AppStack.Screen name="NewContact" component={NewContact} options={{title:"Novo Contato"}} />
                <AppStack.Screen name="ListContacts" component={ListContacts} options={{title:"Contatos"}} /> 
                <AppStack.Screen name="ShowContact" component={ShowContact} options={{title:"Contato"}} />    
                <AppStack.Screen name="ListEmergencyContacts" component={ListEmergencyContacts} options={{title:"Contatos de Emergência"}} />       
                <AppStack.Screen name="NewMedicine" component={NewMedicine} options={{title:"Novo Remédio"}} />      
                <AppStack.Screen name="ListMedicine" component={ListMedicine} options={{title:"Remédios"}} />   
                <AppStack.Screen name="Camera" component={CameraScreen} options={{title:"Camera"}} />              
            </AppStack.Navigator>
        </NavigationContainer>
    );
}