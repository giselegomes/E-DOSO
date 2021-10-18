import { useNavigation } from '@react-navigation/native';
import React from "react";
import { ScrollView, View, Text, StatusBar , Button} from "react-native";
import { Header } from '../../../components/Header/Header';
import { Styles } from '../ListMedicine/ListMedicine.style';


const ListMedicine = () => {
	const navigation = useNavigation();

	return (
		<ScrollView >
            <Header
                title="Medicamentos"
            />

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
