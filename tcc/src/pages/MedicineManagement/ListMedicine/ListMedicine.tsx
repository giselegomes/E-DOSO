import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text, FlatList, StatusBar, Button, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../ListMedicine/ListMedicine.style';
import { FontAwesome } from '@expo/vector-icons';
import api from "../../../services/api";
import { CardMedicine } from '../../../components/CardMedicine/CardMedicine'
import { MedicineProps } from '../../../libs/storage'


/* botão de cadastrar novo lembrete + lista todos os lembretes cadastrados */
const ListMedicine = () => {
    const navigation = useNavigation();

    const [medicines, setMedicines] = useState<MedicineProps[]>([]);

    useEffect(() => {
        async function fetchMedicines() {
            const { data } = await api.get('medicines?_sort=name&_order=asc')
            // salvar dados
            setMedicines(data);
        }

        fetchMedicines();
    }, [])

    function handleMedicineSelect(medicine: MedicineProps) {
    }

    return (
        <ScrollView >
            <View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('NewMedicine')}
                    accessibilityLabel="Adicione um lembrete de remédio">
                    <Text style={styles.btnText}>Adicionar Lembrete</Text>
                    <FontAwesome style={styles.icon} name="plus-circle" size={40} color="gray" >

                    </FontAwesome>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.titleList}>
                    Lembretes cadastrados:
                </Text>

                {/* Renderiza a lista com os lembretes cadastrados */}
                {/* CardMedicine * componente */}
                <FlatList 
                    data={medicines}
                    renderItem={({ item }) => (
                        <CardMedicine 
                        style={styles.list} 
                        data={item}
                        onPress={() => handleMedicineSelect(item)}
                        />
                    )}
                />
            </View>
        </ScrollView>
    )
}

export default ListMedicine;
