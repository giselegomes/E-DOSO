import React from "react";
import { ScrollView, View, Text, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../../components/Header/Header';


const NewMedicine = () => {
	
	return (
		<ScrollView >
            <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent/>
            
            <Header
                title="Adicionar Medicamento"
            />
        </ScrollView>
    )
}

export default NewMedicine;
