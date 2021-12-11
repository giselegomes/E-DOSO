import React from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight, Linking, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Styles } from './ShowContact.style';
import { Card, Icon } from 'react-native-elements';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CustomModal from '../../../components/CustomModal/CustomModal';
import ImagePicker from '../../../components/CustomImagePicker/CustomImagePicker';
import * as Contact from 'expo-contacts';

const ShowContact = () => {
    const navigation = useNavigation();

    type ParamList = {
        ShowContact: {
            contactName: string;
            contactNumber: string;
            imageContact: string;
            id: string;
        };
    };
    const contact = useRoute<RouteProp<ParamList, 'ShowContact'>>();
    const number = contact.params.contactNumber;
    const name = contact.params.contactName;
    const id = contact.params.id;
    const [isOpenModal, setisOpenModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpenBlockModal, setIsOpenBlockModal] = useState(false);
    const [statusImagePicker, setStatusImagePicker] = useState(false);
    const [hasImage, setHasImage] = useState(contact.params.imageContact !== undefined);
    const [image, setImage] = useState<string | undefined>(contact.params.imageContact);

    const toogleImagePicker = () => {
        setStatusImagePicker(!statusImagePicker);
    };

    const toogleSetImage = (uri: string) => {
        setImage(uri);
        toogleImagePicker();
        setHasImage(true);
    }


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
        Alert.alert(
            "Edição de contato",
            "No momento a edição de contato não está funcionando.",
            [
              {
                text: "Cancelar",
                onPress: () => {},
                style: "cancel"
              },
              {
                text: "Prosseguir mesmo assim", 
                onPress: () => {
                    setisOpenModal(!isOpenModal)
                }
              }
            ]
          );
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
                            firstOptionTitle={'Excluir'}
                            showIcon={true}
                        />
                    }
                    {isOpenBlockModal &&
                        <CustomModal
                            modalTitle='Tem certeza que deseja bloquear esse contato ?'
                            handleFirstOption={blockContact}
                            handleCancelOption={toogleBlockModal}
                            firstOptionTitle={'Bloquear'}
                            showIcon={true}
                        />
                    }
                </View>
                <View >
                    <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
                        {statusImagePicker &&
                            <ImagePicker toogleImagePicker={toogleImagePicker} toogleSetImage={toogleSetImage} />
                        }
                        {hasImage ?
                            <TouchableOpacity onPress={toogleImagePicker} >
                                <Image source={{ uri: image }} style={Styles.imageContainer} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={toogleImagePicker} >
                                <View style={Styles.iconContainer}>

                                    <Icon
                                        name={"user"}
                                        type={"font-awesome"}
                                        color="white"
                                        iconStyle={Styles.icon}
                                    />
                                </View>
                            </TouchableOpacity>
                        }

                        <View style={{ display: "flex", marginTop: 10, height: 60 }}>
                            <View style={Styles.topbar}>
                                <Text style={Styles.cardText}>{name}</Text>
                                <View style={{ width: 20, height: 50, }}>
                                    <TouchableOpacity onPress={handleModal}>
                                        <Icon
                                            name={"ellipsis-v"}
                                            type={"font-awesome"}
                                            color="black"
                                            iconStyle={Styles.dotIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        
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