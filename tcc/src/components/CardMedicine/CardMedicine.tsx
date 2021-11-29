import React from 'react';
import {
    Text,
} from 'react-native';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { styles } from '../Header/Header.style';

interface MedicineProps extends RectButtonProps {
    data: {
        name: string;
    }
}

// Pega os dados de services/server.json
export const CardMedicine = ({ data, ...rest} : MedicineProps) => {
    return (
        <RectButton
        style={styles.container}
            {...rest}
        >
            <Text>
                { data.name }
            </Text>
        </RectButton>
    )
}

export default CardMedicine;