import React from "react";
import { ScrollView, View, Text, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';


const NewMedicine = () => {

    return (
        <ScrollView >
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent />
        </ScrollView>
    )
}

export default NewMedicine;
