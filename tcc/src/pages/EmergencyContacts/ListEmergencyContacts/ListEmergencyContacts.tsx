import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from './ListEmergencyContacts.style';
import { Card, Icon } from 'react-native-elements';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage  from '@react-native-async-storage/async-storage';

const ListEmergencyContacts = () => {
    type ParamList = {
        ListEmergencyContacts?: {
            contact?: any;
        };
    };
    const emergencyContact = useRoute<RouteProp<ParamList, 'ListEmergencyContacts'>>();
    const contact = emergencyContact?.params?.contact;

    const [listContacts, setListContacts] = useState<any>([]);
    const [searchedContacts, setSearchedContacts] = useState<any>([]);
    const navigation = useNavigation();

    useEffect(() => {
        const loadEmergencyContacts = async () => {
            try {
                let data: any = await AsyncStorage.getItem('EmergencyContacts');
                if(data !== null) {
                    setSearchedContacts(JSON.parse(data));
                    setListContacts(data)
                }
            }
            catch(error) {
                alert(error)
            }
        }
        const addEmergencyContact = async () => {    
            try {
                searchedContacts.push(contact)
                await AsyncStorage.setItem('EmergencyContacts', JSON.stringify(searchedContacts));
                setSearchedContacts([...searchedContacts]);
            } catch(error) {
                alert(error)
            }
        }
        if(contact !== null) {
            addEmergencyContact();
        }
        loadEmergencyContacts();
    }, [contact])
    
    const toogleSearchedContacts = (searchedValue: string) => {
        const results = listContacts.filter((contact: any) =>
            contact.name.toLowerCase().includes(searchedValue.toLowerCase()),
        );
        setSearchedContacts(results);
    };

    const redirectToContact = () => {
        navigation.navigate('ListContacts', {isEmergency: true});
    }

    return (
        <ScrollView style={{ height: "100%", width: "100%", backgroundColor: 'white' }}>
            <View style={Styles.listContainer}>
                <TouchableOpacity style={Styles.searchSection} onPress={redirectToContact}>
                <Text style={Styles.addContact}>Adicionar contato</Text>
                    <Icon
                        name={"plus"}
                        type={"font-awesome"}
                        color="#aa5c9f"
                        iconStyle={Styles.searchIcon}
                    />
                </TouchableOpacity>
                <View>
                    {Object.values(searchedContacts).map((item: any, key: number) => {
                         return (
                                <Text 
                                  key={key} 
                                  style={key === 0 ? Styles.firstContact : Styles.contacts}>
                                  {item?.name}
                                </Text>
                            )
                        })
                        }
                </View>
            </View>
        </ScrollView >
    );
}

export default ListEmergencyContacts;