import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { 
    ScrollView, 
    View, 
    Text, 
    StatusBar, 
    Button, 
    TouchableOpacity,
    Image
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { medicineProps } from "../../../libs/storage";
// import imagemdeteste from '../../../../assets/icon.png';

interface params {
    medicine: medicineProps
}

const ShowMedicine = () => {
	const navigation = useNavigation();

    const [medicineName, setMedicineName] = useState<string>();

    useEffect(( )=> {
        async function loadStorageMedicineName() {
            //recupera nome de usuário
            const medicineName = await AsyncStorage.getItem('@medicine:name');
            setMedicineName(medicineName || '')
        }
        loadStorageMedicineName();
    },[]
        )

	return (
        <View>
            {/* <Image source={imagemdeteste} /> */}
            <Text> {medicineName} </Text>
        </View>
	)
}

export default ShowMedicine;
