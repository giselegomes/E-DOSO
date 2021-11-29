import AsyncStorage from "@react-native-async-storage/async-storage";
import format from "date-fns/format";

export interface MedicineProps {
    id: string;
    name: string;
    dateTimeNotification: Date;
}

//Salvar o lembrete como objeto
interface StorageMedicineProps {
    [id: string] : {
        data: MedicineProps;
    }
}

//Salvar o lembrete no assync storage - salva como objeto
export async function saveMedicine(medicine: MedicineProps) : Promise<void> {
    try {
        const data = await AsyncStorage.getItem('@medicinemanager:medicine');
        const oldMedicine = data ? (JSON.parse(data) as StorageMedicineProps) : {}; 

        //tentando usar o nome como "id"
        const newMedicine = {
            [medicine.name]: {
                data: medicine
            }
        }

        //mantém o q já tem e cadastra novos
        await AsyncStorage.setItem("@medicines:name",
        JSON.stringify({
            ...newMedicine,
            ...oldMedicine
        }));

    }catch(error) {
        throw new Error(error);
    }
}

export async function loadMedicine() : Promise<StorageMedicineProps> {
    try {
        const data = await AsyncStorage.getItem('@medicines:name');
        const medicines = data ? (JSON.parse(data) as StorageMedicineProps) : {}; 

        return medicines;

    }catch(error) {
        throw new Error();
    }
}
    
