import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Styles } from './NewContact.style';
import { Card, Icon } from 'react-native-elements';
import ImagePicker from '../../../components/CustomImagePicker/CustomImagePicker';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';

const NewContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [statusImagePicker, setStatusImagePicker] = useState(false);
    const [hasImage, setHasImage] = useState(false);
    const [image, setImage] = useState('');

    const toogleImagePicker = () => {
        setStatusImagePicker(!statusImagePicker);
    };

    const toogleSetImage = (uri: string) => {
        setImage(uri);
        toogleImagePicker();
        setHasImage(true);
    }

    const handleNewContact = async () => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        ).then(() => {
            var newPerson = {
                recordID: 'teste',
                backTitle: 'teste',
                company: 'teste',
                emailAddresses: [{ label: 'teste', email: 'teste' }],
                displayName: 'teste',
                familyName: 'teste',
                givenName: 'teste',
                middleName: 'teste',
                jobTitle: 'teste',
                phoneNumbers: [{ label: 'teste', number: 'teste' }],
                hasThumbnail: false,
                thumbnailPath: 'teste',
                postalAddresses: [{
                    label: 'teste',
                    formattedAddress: 'teste',
                    street: 'teste',
                    pobox: 'teste',
                    neighborhood: 'teste',
                    city: 'teste',
                    region: 'teste',
                    state: 'teste',
                    postCode: 'teste',
                    country: 'teste',
                }],
                prefix: 'teste',
                suffix: 'teste',
                department: 'teste',
                birthday: {day: 1, month: 2, year: 2021 },
                imAddresses: [{ username: 'teste', service: 'teste'}],
                note: 'teste',
            }
    
            alert(Contacts.addContact(newPerson))

        })
        .catch((err) => {
            alert(err);
        })
    }

    return (
        <ScrollView >
            <View style={{ display: "flex", marginTop: 10, height: 80 }}>
                <Card containerStyle={Styles.topbar}>
                    <Text style={Styles.cardText}>Adicionar contato</Text>
                </Card>
            </View>
            <View >
                <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
                    {statusImagePicker &&
                        <ImagePicker toogleImagePicker={toogleImagePicker} toogleSetImage={toogleSetImage} />
                    }
                    {hasImage ?
                        <Image source={{ uri: image }} style={Styles.imageContainer} />
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

                    <TouchableOpacity style={Styles.button} onPress={toogleImagePicker} >
                        <Text style={Styles.buttonText}>Adicionar foto</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={Styles.input}
                    placeholder="Nome"
                    placeholderTextColor="gray"
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <TextInput
                    style={Styles.input}
                    keyboardType='numeric'
                    placeholder="Telefone ( )"
                    placeholderTextColor="gray"
                    onChangeText={(text) => setPhone(text)}
                    value={phone}
                />
                <View style={{ width: '100%', flex: 1, flexDirection: 'row', marginLeft: 45 }}>
                    <TouchableOpacity style={Styles.buttonSave} onPress={handleNewContact}>
                        <Text style={Styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttonCancel}>
                        <Text style={Styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default NewContact;