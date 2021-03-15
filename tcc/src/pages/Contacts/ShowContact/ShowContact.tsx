import React from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight, Linking, Alert, Platform } from 'react-native';
import { Styles } from './ShowContact.style';
import { Card, Icon } from 'react-native-elements';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

const ShowContact = () => {
    const navigation = useNavigation();

    type ParamList = {
        ShowContact: {
            contactNumber: Array<any>;
            imageContact: string;
        };
      };
    const contact = useRoute<RouteProp<ParamList, 'ShowContact'>>();
    const number = contact.params.contactNumber[0].number
    const image = contact.params.imageContact;

    const callContact = () => {
        let call = `tel:${number}`
        Linking.canOpenURL(call)
        .then(supported => {
            if(!supported) {
                Alert.alert('Número não está disponível')
            } else {
                return Linking.openURL(call);
            }
        })
        .catch(err => alert(err));
    }

    const openWhatsapp = () => {
        Linking.openURL(`whatsapp://send?text=${''}&phone=${number}`)
    }

    const openSms = () => {
        Linking.openURL(`sms:${number}?body=${''}`)
    }

    const goBack = () => {
        navigation.navigate('ListContacts');
    }
 
    return (
        <ScrollView >
            <View style={{ display: "flex", marginTop: 10, height: 80 }}>
                <Card containerStyle={Styles.topbar}>
                    <Text style={Styles.cardText}>Contato</Text>
                </Card>
            </View>
            <View >
                <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
                    {image !== undefined ?
                        <Image source={{ uri: contact.params.imageContact }} style={Styles.imageContainer} />
                        :
                        <View style={Styles.iconContainer}>

                            <Icon
                                name={"user"}
                                type={"font-awesome"}
                                color="white"
                                iconStyle={Styles.icon}
                            />
                        </View>
                    }
                    <TouchableHighlight style={Styles.buttonCall} onPress={callContact}>
                        <View style={{flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={Styles.buttonText}>Ligar</Text>
                            <Icon
                                name={"phone"}
                                type={"font-awesome"}
                                color="white"
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={Styles.buttonWhatsapp} onPress={openWhatsapp}>
                        <View style={{flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={Styles.buttonText}>WhatsApp</Text>
                            <Icon
                                name={"whatsapp"}
                                type={"font-awesome"}
                                color="white"
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={Styles.buttonMessage} onPress={openSms}>
                        <View style={{flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={Styles.buttonText}>SMS</Text>
                            <Icon
                                name={"comments"}
                                type={"font-awesome"}
                                color="white"
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={Styles.buttonBack} onPress={goBack}>
                        <View style={{flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={Styles.buttonText}>Voltar</Text>
                            <Icon
                                name={"arrow-left"}
                                type={"font-awesome"}
                                color="white"
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </ScrollView>
    );
}

export default ShowContact;