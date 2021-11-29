import React, { useEffect, useState } from 'react';
import {ScrollView, Text, TouchableOpacity, Image, View } from 'react-native';
import { Styles } from './TutorialPage.style';
import Images from '../../../components/TutorialImages/TutorialImages';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const [imageCount, setImageCount] = useState(1);
    const navigation = useNavigation();

    useEffect(() => {
        const setTutorial = async () => {
            try {
                await AsyncStorage.setItem('tutorial', JSON.stringify(true));
            }
            catch(error) {
                alert(error)
            }
        }
        setTutorial();
    }, [])

    const handleNextImage = () => {
        setImageCount(imageCount+1)
    }

    const handlePreviousImage = () => {
        setImageCount(imageCount-1)
    }

    const backToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <ScrollView>
            <Image source={Images[`image${imageCount}`]} style={{width: '100%', height: imageCount !== 7 ? 400 : 500,}} />
            <View style={Styles.ButtonContainer} >
                {imageCount > 1 &&
                    <TouchableOpacity style={Styles.button} onPress={handlePreviousImage}>
                        <Text style={Styles.buttonText}>Anterior</Text>                
                    </TouchableOpacity>
                }
                {imageCount < 18 ? 
                    <TouchableOpacity style={Styles.button} onPress={handleNextImage}>
                        <Text style={Styles.buttonText}>Próximo</Text>                
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={Styles.button} onPress={backToHome}>
                        <Text style={Styles.buttonText}>Encerrar</Text>                
                    </TouchableOpacity>
                }
            </View>
        </ScrollView>
    );
}

export default Settings;