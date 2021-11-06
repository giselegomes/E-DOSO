import React from "react";
import { ScrollView, View, TextInput, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const NewMedicine = () => {

    return (
        <ScrollView >
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent 
            />
            
            <TextInput
                placeholder="Nome:" 
            />

            <TextInput
                placeholder="Horário inicial:" 
            />

            <TextInput
                placeholder="Repedir de:" 
            />

            <RNPickerSelect
            
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />

        </ScrollView>
    )
}

export default NewMedicine;
