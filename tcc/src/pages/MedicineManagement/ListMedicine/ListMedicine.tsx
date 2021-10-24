import { useNavigation } from '@react-navigation/native';
import React from "react";
import { ScrollView, View, Text, StatusBar , Button, TouchableOpacity} from "react-native";
import { ThemeContext } from 'react-native-elements';
import { styles } from '../ListMedicine/ListMedicine.style';
import { Header } from '../../../components/Header/Header';
import { FontAwesome } from '@expo/vector-icons';


const ListMedicine = () => {
	const navigation = useNavigation();

	return (
		<ScrollView >
            <View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('NewMedicine') } 
                    accessibilityLabel="Adicione um lembrete de remédio">
                    <Text style={styles.btnText}>Adicionar Lembrete</Text>
                    <FontAwesome style={styles.icon} name="plus-circle" size={40} color="gray" >

                    </FontAwesome>
                </TouchableOpacity>

                
            </View>
        </ScrollView>

	)
}

export default ListMedicine;
