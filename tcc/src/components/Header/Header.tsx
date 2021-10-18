import { useNavigation } from '@react-navigation/native';
import React from "react";
import { View, Text, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { styles } from './Header.style';

type Props = {
    title: string;
}

export function Header({title}:Props) {
    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent/>

            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={28}
                    color={'#FFF'}
                />
            </BorderlessButton>
            <Text style={styles.title}>
                { title } 
            </Text>
        </View>
    )
}