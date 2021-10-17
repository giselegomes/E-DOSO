import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, View, Text, StatusBar } from "react-native";


const NewMedicine = () => {
	const navigation = useNavigation();

	return (
		<ScrollView >
            <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent/>
            
            <View style={{ backgroundColor: 'purple'}}>
                <Text>
                    Lembrete
                </Text>
            </View>

            <View>
                <Text>
                    Adicionar lembrete 
                </Text>
            </View>
        </ScrollView>

	)
}

export default NewMedicine;
