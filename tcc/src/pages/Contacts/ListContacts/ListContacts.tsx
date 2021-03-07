import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Styles } from './ListContacts.style';
import { Card, Icon } from 'react-native-elements';
import * as Contacts from 'expo-contacts';
import { useNavigation } from '@react-navigation/native';

interface Contact {
  phoneNumber: number;
  imageContact: string;
}

const ListContacts = () => {
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
                    imageContact: image.data[key].image?.uri
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

    const redirectToContact = (phoneNumber: number, image: string) => {
        navigation.navigate('ShowContact', { contactNumber: phoneNumber, imageContact: image });
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
                                  onPress={() => redirectToContact(item.phoneNumber[0].number, item.imageContact)}>
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