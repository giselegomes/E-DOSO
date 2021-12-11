import React, { useState, useEffect, useRef } from 'react';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Card, Icon } from 'react-native-elements';
import ImagePicker from '../../../components/CustomImagePicker/CustomImagePicker';
import {
    Text,
    View,
    Button,
    Platform,
    ScrollView,
    TextInput,
    StatusBar,
    Alert,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';

import { Styles } from '../NewMedicine/NewMedicine.style';
import { saveMedicine } from '../../../libs/storage';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const NewMedicine = () => {
    const navigation = useNavigation();

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState<Notifications.Notification | undefined>();
    const notificationListener = useRef();
    const responseListener = useRef();

    const [name, setMedicineName] = useState<string>("");

    //Horário
    const [selectedDateTime, setSelectedDateTime] = useState<Date | undefined>();
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    //Imagem
    const [statusImagePicker, setStatusImagePicker] = useState(false);
    const [hasImage, setHasImage] = useState(false);
    const [image, setImage] = useState<string | undefined>('');



    const toogleImagePicker = () => {
        setStatusImagePicker(!statusImagePicker);
    };

    const toogleSetImage = (uri: string) => {
        setImage(uri);
        toogleImagePicker();
        setHasImage(true);
    }

    const goBack = () => {
        navigation.navigate('ListMedicine');
    }

    function handleInputChange(value: string) {
        //se não tiver conteúdo, falso!
        setMedicineName(value);
    }

    async function handleSave() {
        try {
            if (selectedDateTime != undefined && name != '' && image != undefined) {

                await saveMedicine({
                    dateTimeNotification: selectedDateTime!,
                    name: name,
                    imageUri: image!

                });
                navigation.navigate("ListMedicine");
            }
            else
                Alert.alert("Não foi possível salvar")

        } catch {
            Alert.alert("Não foi possível salvar")
        }
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token!));

        // This listener is fired whenever a notification is received while the app is foregrounded
        Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

    }, []);

    return (
        <KeyboardAvoidingView>
            <View>
                <ScrollView >
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="transparent"
                        translucent
                    />

                    <View>

                        <View style={{ width: "100%", alignItems: "center", marginTop: 50 }}>
                            {statusImagePicker &&
                                <ImagePicker toogleImagePicker={toogleImagePicker} toogleSetImage={toogleSetImage} />
                            }
                            {hasImage ?
                                <Image source={{ uri: image }} style={Styles.imageContainer} />
                                :
                                <View style={Styles.iconContainer}>

                                    <Icon
                                        name={"capsules"}
                                        type={"font-awesome-5"}
                                        color="white"
                                        iconStyle={Styles.icon}
                                    />
                                </View>
                            }

                            <TouchableOpacity style={Styles.button} onPress={toogleImagePicker} >
                                <Text style={Styles.buttonText}>Adicionar foto</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={Styles.input}
                            placeholder="Nome"
                            onChangeText={handleInputChange}
                        />
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDateTime == undefined ? new Date() : selectedDateTime}
                                style={Styles.input}
                                mode="time"
                                onChange={(a: Event, b: Date | undefined) => {
                                    if (b == undefined)
                                        setSelectedDateTime(new Date())
                                    else
                                        setSelectedDateTime(b!)
                                    setShowDatePicker(false)
                                }
                                }
                            />
                        )}

                        <TextInput
                            style={Styles.input}
                            placeholder='Horário'
                            value={`${selectedDateTime == undefined ? '' : format(selectedDateTime, 'HH:mm')}`}
                            onFocus={() => setShowDatePicker(true)}
                        />

                        <View style={{ width: '100%', flex: 1, flexDirection: 'row', marginLeft: 45 }}>
                            <TouchableOpacity style={Styles.buttonSave} onPress={handleSave}>
                                <Text style={Styles.buttonText}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.buttonCancel} onPress={goBack}>
                                <Text style={Styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                        {/* 
                        <Button
                            title="Aperta aqui"
                            onPress={async () => {
                                await sendPushNotification(expoPushToken);
                            }}
                        /> */}
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

// Notificação
// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(expoPushToken: string) {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title: 'Oi',
        body: 'And here is the body!',
        android: { sound: true },
        data: { someData: 'goes here' },
    };

    //Tempo
    const options = {
        time: Date.now() + 10000, // Schedule it in 10 seconds
        repeat: 'day', // Repeat it daily
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Falha ao salvar notificação!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Deve ser usado um dispositivo fisico para usar as notificações');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }
    return token;
}

export default NewMedicine;

