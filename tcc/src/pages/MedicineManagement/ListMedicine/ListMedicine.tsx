import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, View, Text, StatusBar, Button } from "react-native";


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
                    Remédios
                </Text>
            </View>

            <View>
                <Button
                    onPress={() => navigation.navigate('NewMedicine')}
                    title="Adicionar Lembrete"
                    accessibilityLabel="Adicione um lembrete de remédio"
                />
            </View>
        </ScrollView>
    )
}

export default NewMedicine;
