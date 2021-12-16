import AsyncStorage from "@react-native-async-storage/async-storage";
import format from "date-fns/format";

export interface MedicineProps {
    name: string;
    dateTimeNotification: string;
    imageUri: string
}

//Salvar o lembrete no assync storage - salva como objeto
export async function saveMedicine(medicine: MedicineProps) : Promise<void> {
    try {
        const data = await AsyncStorage.getItem('Medicine');
        const oldMedicine = data ? (JSON.parse(data) as Array<MedicineProps>) : []; 

        //tentando usar o nome como "id"
        const newMedicine = [medicine]

        //mantém o q já tem e cadastra novos
        await AsyncStorage.setItem("Medicine",
        JSON.stringify([
            ...oldMedicine,
            ...newMedicine
        ]));

    }catch(error) {
        // throw new Error(error);
    }
}

export async function loadMedicine() : Promise<Array<MedicineProps>> {
    try {
        const data = await AsyncStorage.getItem('Medicine');
        const medicines = data ? (JSON.parse(data) as Array<MedicineProps>) : []; 

        return medicines;

    }catch(error) {
        throw new Error();
    }
}
    
