import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Styles } from './ListContacts.style';
import { Card, Icon } from 'react-native-elements';
import * as Contacts from 'expo-contacts';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

interface Contact {
  phoneNumber: number;
  imageContact: string;
}

const ListContacts = () => {
    type ParamList = {
        ListContacts: {
            isEmergency: boolean;
        };
    };
    const contact = useRoute<RouteProp<ParamList, 'ListContacts'>>();
    const isEmergency = contact.params.isEmergency;

    const [listContacts, setListContacts] = useState<any>([]);
    const [searchedContacts, setSearchedContacts] = useState<any>();
    const navigation = useNavigation();


    useEffect(() => {
        const loadContacts = async () => {
            const data = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers],
            });
            const image = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Image],
            });
 
            const contacts = data.data.map((item: any, key: number) => {
                return {
                    name: item.name,
                    phoneNumber: item.phoneNumbers,
                    imageContact: image.data[key].image?.uri,
                    id: item.id,
                }
            })
            setSearchedContacts(contacts);
            setListContacts(contacts)
        }
        loadContacts();
    }, [])
    
    const toogleSearchedContacts = (searchedValue: string) => {
        const results = listContacts.filter((contact: any) =>
            contact.name.toLowerCase().includes(searchedValue.toLowerCase()),
        );
        setSearchedContacts(results);
    };

    const redirectToShowContact = (phoneNumber: number, image: string, id: string) => {
        navigation.navigate('ShowContact', { contactNumber: phoneNumber, imageContact: image, id: id });
    }

    const addToEmergencyContact = (contact: any) => {
        navigation.navigate('ListEmergencyContacts', { contact: contact})
    }

    return (
        <ScrollView style={{ height: "100%", width: "100%", backgroundColor: 'white' }}>
            <View style={{ display: "flex", marginTop: 10, height: 80 }}>
                <Card containerStyle={Styles.topbar}>
                    <Text style={Styles.cardText}>Contatos</Text>
                </Card>
            </View>
            <View style={Styles.listContainer}>
                <View style={Styles.searchSection} >
                    <TextInput
                        style={Styles.input}
                        placeholder="Pesquisar contato"
                        placeholderTextColor="gray"
                        onChangeText={(text) => toogleSearchedContacts(text)}
                    />
                    <Icon
                        name={"search"}
                        type={"font-awesome"}
                        color="#aa5c9f"
                        iconStyle={Styles.searchIcon}
                    />
                </View>
                <View>
                    {searchedContacts !== undefined &&
                        searchedContacts.map((item: any, key: number) => {
                            return (
                                <Text 
                                  key={key} 
                                  style={key === 0 ? Styles.firstContact : Styles.contacts} 
                                  onPress={ 
                                    isEmergency ?
                                      () => addToEmergencyContact(item)
                                      :
                                      () => redirectToShowContact(item.phoneNumber[0].number, item.imageContact, item.id)
                                    }>
                                  {item.name}
                                </Text>
                            )
                        })}
                </View>
            </View>
        </ScrollView >
    );
}

export default ListContacts;