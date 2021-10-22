import { useNavigation } from '@react-navigation/native';
import React from "react";
import { ScrollView, View, Text, StatusBar , Button} from "react-native";
import { Styles } from '../ListMedicine/ListMedicine.style';


const ListMedicine = () => {
	const navigation = useNavigation();

	return (
		<ScrollView >
            <View>
                <Button
                    onPress={() => navigation.navigate('NewMedicine') } 
                    title="Adicionar Lembrete"
                    accessibilityLabel="Adicione um lembrete de remédio"
                />
            </View>
        </ScrollView>

	)
}

export default ListMedicine;
