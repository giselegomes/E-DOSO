import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from '../ListMedicine/ListMedicine.style';
import { FontAwesome } from '@expo/vector-icons';
import { loadMedicine, MedicineProps } from '../../../libs/storage'
import { Icon } from "react-native-elements";
import { format } from "date-fns";


/* botão de cadastrar novo lembrete + lista todos os lembretes cadastrados */
const ListMedicine = () => {
    const navigation = useNavigation();

    const [medicines, setMedicines] = useState<Array<MedicineProps>>();

    useEffect(() => {
        async function fetchMedicines() {
            let data: Array<MedicineProps> = await loadMedicine();
            console.log(data);
            // salvar dados
            if (data != null)
                setMedicines(data);

        }

        fetchMedicines();
    }, [])

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
                {/* Renderiza a lista com os lembretes cadastrados */}
                {/* CardMedicine * componente */}
                {(medicines && medicines != null && medicines != undefined) ? medicines.map((item,index) => {
                   return  (
                    <View style={{ width: '100%', flex: 1, flexDirection: 'row', paddingLeft: 45, marginTop: 15, justifyContent: "space-between" }}>
                        <Text key={index}>{item.name}</Text>
                        <Text key={index}>{format(item.dateTimeNotification, 'HH:mm')}</Text>
                        {item.imageUri != undefined && item.imageUri != '' ?
                                <Image source={{ uri: item.imageUri }} style={styles.imageContainer} />
                                :
                                <View style={styles.iconContainer}>

                                    <Icon
                                        name={"capsules"}
                                        type={"font-awesome-5"}
                                        color="white"
                                        iconStyle={styles.iconMeds}
                                    />
                                </View>
                            }
                </View>
                    )
                }) : <Text>Carregando...</Text>}
            </View>
        </ScrollView>
    )
}

export default ListMedicine;
