import React from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight, Linking, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Styles } from './ShowContact.style';
import { Card, Icon } from 'react-native-elements';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CustomModal from '../../../components/CustomModal/CustomModal';
import * as Contact from 'expo-contacts';

const ShowContact = () => {
    const navigation = useNavigation();

    type ParamList = {
        ShowContact: {
            contactNumber: string;
            imageContact: string;
            id: string;
        };
    };
    const contact = useRoute<RouteProp<ParamList, 'ShowContact'>>();
    const number = contact.params.contactNumber
    const image = contact.params.imageContact;
    const id = contact.params.id;
    const [isOpenModal, setisOpenModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpenBlockModal, setIsOpenBlockModal] = useState(false);

    const callContact = () => {
        let call = `tel:${number}`
        Linking.canOpenURL(call)
            .then(supported => {
                if (!supported) {
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

    const handleModal = () => {
        setisOpenModal(!isOpenModal)
    }

    const redirectToEdit = () => {
        navigation.navigate('NewContact', { param: 'edit', id: id })
    }

    const toogleDeleteModal = () => {
        setIsOpenDeleteModal(!isOpenDeleteModal)
        handleModal()
    }

    const toogleBlockModal = () => {
        setIsOpenBlockModal(!isOpenBlockModal);
        handleModal()
    }

    const blockContact = () => {

    }

    const deleteContact = () => {
        Contact.requestPermissionsAsync()
            .then((response) => {
                try {
                    if (response.granted) {
                        Contact.removeContactAsync(id);
                    }
                } catch (error) {
                    alert(error);
                }
            });
    }

    return (
        <ScrollView >
            <View>
                <View style={{ width: "100%", alignItems: "center", marginTop: 100, height: '35%', position: 'absolute' }}>
                    {isOpenDeleteModal &&
                        <CustomModal
                            modalTitle='Tem certeza que deseja excluir esse contato ?'
                            handleFirstOption={deleteContact}
                            handleCancelOption={toogleDeleteModal}
                            firstOptionTitle={'Excluir'} />
                    }
                    {isOpenBlockModal &&
                        <CustomModal
                            modalTitle='Tem certeza que deseja bloquear esse contato ?'
                            handleFirstOption={blockContact}
                            handleCancelOption={toogleBlockModal}
                            firstOptionTitle={'Bloquear'} />
                    }
                </View>
                <View style={{ display: "flex", marginTop: 10, height: 80 }}>
                    <Card containerStyle={Styles.teste}>
                        <View style={Styles.topbar}>
                            <Text style={Styles.cardText}>Contato</Text>
                            <View style={{ width: 20, height: 50, }}>
                                <TouchableOpacity onPress={handleModal}>
                                    <Icon
                                        name={"ellipsis-v"}
                                        type={"font-awesome"}
                                        color="white"
                                        iconStyle={Styles.dotIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
                    {isOpenModal &&
                        <View style={{ alignItems: 'flex-end', marginRight: 15, marginTop: 5 }}>
                            <View style={{ width: 250, backgroundColor: 'white', zIndex: 10, paddingLeft: 15, paddingRight: 15 }}>
                                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={redirectToEdit}>
                                    <Icon
                                        name={"pencil"}
                                        type={"font-awesome"}
                                        color="gray"
                                    />
                                    <Text style={Styles.listOptions}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 2, borderTopColor: '#e0dede', zIndex: 10 }} onPress={toogleDeleteModal}>
                                    <Icon
                                        name={"trash"}
                                        type={"font-awesome"}
                                        color="gray"
                                    />
                                    <Text style={Styles.listOptions}>Excluir</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center', borderTopWidth: 2, borderTopColor: '#e0dede' }} onPress={toogleBlockModal}>
                                    <Icon
                                        name={"ban"}
                                        type={"font-awesome"}
                                        color="gray"
                                    />
                                    <Text style={Styles.listOptions}>Bloquear</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
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
                            <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={Styles.buttonText}>Ligar</Text>
                                <Icon
                                    name={"phone"}
                                    type={"font-awesome"}
                                    color="white"
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={Styles.buttonWhatsapp} onPress={openWhatsapp}>
                            <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={Styles.buttonText}>WhatsApp</Text>
                                <Icon
                                    name={"whatsapp"}
                                    type={"font-awesome"}
                                    color="white"
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={Styles.buttonMessage} onPress={openSms}>
                            <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={Styles.buttonText}>SMS</Text>
                                <Icon
                                    name={"comments"}
                                    type={"font-awesome"}
                                    color="white"
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={Styles.buttonBack} onPress={goBack}>
                            <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
            </View>
        </ScrollView>
    );
}

export default ShowContact;