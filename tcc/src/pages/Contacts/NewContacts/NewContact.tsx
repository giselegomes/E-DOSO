import React, { useState } from 'react'; 
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { Styles } from './NewContact.style';
import { Card, Icon } from 'react-native-elements';

const NewContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <ScrollView>
            <View style={{display:"flex", marginTop:10, height: 80}}>
                <Card containerStyle={Styles.topbar}>
                    <Text style={Styles.cardText}>Adicionar contato</Text>
                </Card>
            </View>
            <View style={{width:"100%", alignItems:"center", marginTop:10}}>
                <Card containerStyle={Styles.iconContainer}>
                    <Icon
                        name={"user"}
                        type={"font-awesome"}
                        color="white"
                        iconStyle={Styles.icon}
                    />
                </Card> 
                <TouchableOpacity style={Styles.button}>
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
                placeholder="Telefone ( )"
                placeholderTextColor="gray"
                onChangeText={(text) => setPhone(text)}
                value={phone}
            />
            <View style={{width: '100%', flex: 1, flexDirection: 'row', marginLeft: 45}}>
                <TouchableOpacity style={Styles.buttonSave}>
                    <Text style={Styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttonCancel}>
                    <Text style={Styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default NewContact;