import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Styles } from './NewContact.style';
import { Card, Icon } from 'react-native-elements';
import ImagePicker from '../../../components/CustomImagePicker/CustomImagePicker';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import * as Contacts from 'expo-contacts';

interface Contact {
    id: string;
    contactType: string;
    name: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    maidenName?: string;
    namePrefix?: string;
    nameSuffix?: string;
    nickname?: string;
    phoneticFirstName?: string;
    phoneticMiddleName?: string;
    phoneticLastName?: string;
    company?: string;
    jobTitle?: string;
    department?: string;
    note?: string;
    imageAvailable?: boolean;
    image?: Image;
    rawImage?: Image;
    birthday?: Date;
    dates?: Date[];
    relationships?: Relationship[];
    emails?: Email[];
    phoneNumbers?: PhoneNumber[];
    addresses?: Address[];
    instantMessageAddresses?: InstantMessageAddress[];
    urlAddresses?: UrlAddress[];
    nonGregorianBirthday?: Date;
    socialProfiles?: SocialProfile[];
    [index: string]: string | undefined | boolean | Image | Date | Relationship[] | Email[] | PhoneNumber[] | Date[] |Address[] | InstantMessageAddress[] | UrlAddress[] | SocialProfile[];
};

interface Relationship {
    label: string;
    name?: string;
    id: string;
};

interface Email {
    email?: string;
    isPrimary?: boolean;
    label: string;
    id: string;
};
interface PhoneNumber {
    number?: string;
    isPrimary?: boolean;
    digits?: string;
    countryCode?: string;
    label: string;
    id: string;
};
interface Address {
    street?: string;
    city?: string;
    country?: string;
    region?: string;
    neighborhood?: string;
    postalCode?: string;
    poBox?: string;
    isoCountryCode?: string;
    label: string;
    id: string;
};

interface InstantMessageAddress {
    service?: string;
    username?: string;
    localizedService?: string;
    label: string;
    id: string;
};
interface UrlAddress {
    label: string;
    url?: string;
    id: string;
};

interface SocialProfile {
    service?: string;
    localizedProfile?: string;
    url?: string;
    username?: string;
    userId?: string;
    label: string;
    id: string;
};

const NewContact = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState<string | undefined>('');
    const [statusImagePicker, setStatusImagePicker] = useState(false);
    const [hasImage, setHasImage] = useState(false);
    const [image, setImage] = useState<string | undefined>('');
    type ParamList = {
        NewContact: {
            param: string;
            id: string;
        };
    };
    const newContact = useRoute<RouteProp<ParamList, 'NewContact'>>();

    useEffect(() => {
        const loadContact = async () => {
            const contact = await Contacts.getContactByIdAsync(newContact.params.id);
            if (contact) {
                if (contact.phoneNumbers) {
                    setPhone(contact.phoneNumbers[0].number);
                }
                if (contact.image) {
                    setImage(contact.image.uri);
                    setHasImage(true);
                }
            }
        }

        if (newContact.params.param === 'edit') {
            loadContact();
        }

    }, [])

    const toogleImagePicker = () => {
        setStatusImagePicker(!statusImagePicker);
    };

    const toogleSetImage = (uri: string) => {
        setImage(uri);
        toogleImagePicker();
        setHasImage(true);
    }

    const handleNewContact = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
            const contact = {
                contactType: "person",
                id: "1",
                name: "Test",
                phoneNumbers: [
                    {
                        number: "12 3456-7890",
                        isPrimary: true,
                        digits: "1234567890",
                        id: "1",
                        label: "main",
                    } as Contacts.PhoneNumber
                ]
            } as Contacts.Contact;

            const contactId = await Contacts.addContactAsync(contact);
            alert(contactId);
        }
    }

    const updateContact = async () => {
        Contacts.requestPermissionsAsync()
            .then((response) => {
                try {
                    if (response.granted) {
                        const contact = {
                            id: "1",
                            contactType: 'Person',
                            name: "teste",
                            phone: "41111111",
                        };
                        // Contact.updateContactAsync(contact);
                    }
                } catch (error) {
                    alert(error);
                }
            });
    }

    const goBack = () => {
        if (newContact.params.param === 'edit') {
            navigation.navigate({key: 'ListContacts'});
        } else {
            navigation.navigate({key: 'Home'});
        }
    }

    return (
        <ScrollView >
            <View style={{ display: "flex", marginTop: 10, height: 80 }}>
                <Card containerStyle={Styles.topbar}>
                    {newContact.params.param === 'edit' ?
                    <Text style={Styles.cardText}>Editar contato</Text>
                    :
                    <Text style={Styles.cardText}>Adicionar contato</Text>                    
                    }
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
                    <TouchableOpacity style={Styles.buttonCancel} onPress={goBack}>
                        <Text style={Styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default NewContact;