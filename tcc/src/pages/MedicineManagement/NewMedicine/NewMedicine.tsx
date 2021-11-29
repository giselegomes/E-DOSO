import React, { useEffect, useState } from 'react'
import {
    Alert,
    Text,
    TextInput,
    Button,
    View,
    Platform,
    TouchableOpacity
} from 'react-native'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { loadMedicine, MedicineProps, saveMedicine } from '../../../libs/storage'

interface Params {
    medicine: MedicineProps;
}

export function NewMedicine() {

    //Horário
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState();

    //Horário do primeiro remédio:
    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        if (dateTime)
            setSelectedDateTime(dateTime);
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState)
    }

    //Salva cadastro de lembrete no async storage
    async function handleSave() {
        const data = await loadMedicine();
        console.log(data);
    }

    return (
        //Cadastro de Lembrete
        <View>
            <TextInput 
                placeholder="Nome do Remédio:"
                
            />

            {showDatePicker && (
                <DateTimePicker
                    value={selectedDateTime}
                    mode="time"
                    display="spinner"
                    onChange={handleChangeTime}
                />
            )}
            {
                Platform.OS === 'android' && (
                    <TouchableOpacity
                        onPress={handleOpenDateTimePickerForAndroid}>
                        <Text>
                            {`Horário Inicial ${format(selectedDateTime, 'HH:mm')}`}
                        </Text>
                    </TouchableOpacity>
                )
            }

           {/* Function handleSave */}
            <Button
                title="Salvar"
                onPress={handleSave}
            />
        </View>
    )
}

export default NewMedicine;