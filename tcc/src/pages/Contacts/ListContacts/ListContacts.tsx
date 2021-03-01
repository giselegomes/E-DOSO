import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from './ListContacts.style';
import { Card, Icon } from 'react-native-elements';
import * as Contacts from 'expo-contacts';

const ListContacts: React.FC = () => {
    const [listContacts, setContacts] = useState<any>();
    const [searchedContacts, setSearchedContacts] = useState<any>();

    useEffect(() => {
        const loadContacts = async () => {
            const data = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Name],
            });
            setContacts(data.data);
            setSearchedContacts(data.data);
        }
        loadContacts();
    }, [])

    const toogleSearchedContacts = (searchedValue: string) => {
        const results = listContacts.filter((contact: any) =>
            contact.name.toLowerCase().includes(searchedValue.toLowerCase()),
        );
        setSearchedContacts(results);
      };

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
                                <Text key={key} style={key === 0 ? Styles.firstContact : Styles.contacts}>{item.name}</Text>
                            )
                        })}
                </View>
            </View>
        </ScrollView >
    );
}

export default ListContacts;