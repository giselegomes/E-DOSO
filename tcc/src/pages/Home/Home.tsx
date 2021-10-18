import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Linking, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import { Styles } from "./Home.style";
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
    const menuItens = [
      {
        iconName: "whatsapp",
        iconType: "font-awesome",
        text: "Whatsapp",
        clickFunction: () => {
          Linking.openURL("whatsapp://send?text=Oi");
        },
      },
      {
        iconName: "facebook",
        iconType: "font-awesome",
        text: "Facebook",
        clickFunction: () => {
          Linking.openURL("facebook://app");
        },
      },
      {
        iconName: "phone",
        iconType: "font-awesome",
        text: "Chamadas",
        clickFunction: () => {
          Linking.openURL("facebook://app");
        },
      },
      {
        iconName: "image",
        iconType: "font-awesome",
        text: "Fotos",
        clickFunction: () => {
          Linking.openURL("facebook://app");
        },
      },
      {
        iconName: "camera",
        iconType: "font-awesome",
        text: "Camera",
        clickFunction: () => {
          Linking.openURL("facebook://app");
        },
      },
      {
        iconName: "microphone",
        iconType: "font-awesome",
        text: "Microfone",
        clickFunction: () => {
          Linking.openURL("facebook://app");
        },
      },
      {
        iconName: "search",
        iconType: "font-awesome",
        text: "Lupa",
        clickFunction: () => {
          Linking.openURL("facebook://app");
        },
      },
      {
        iconName: "user-plus",
        iconType: "font-awesome",
        text: "Criar Contato",
        clickFunction: () => {
            navigation.navigate('NewContact', {param: 'create'});
        },
      },
      {
        iconName: "first-aid",
        iconType: "font-awesome-5",
        text: "Emergência",
        clickFunction: () => {
          navigation.navigate('ListEmergencyContacts', {contact: null})
        },
      },
      {
        iconName: "capsules",
        iconType: "font-awesome-5",
        text: "Remédios",
        clickFunction: () => {
          navigation.navigate('ListMedicine', {param: 'create'});
        },
      },
      {
        iconName: "users",
        iconType: "font-awesome",
        text: "Contatos",
        clickFunction: () => {
          navigation.navigate('ListContacts', {isEmergency: false})
        },
      },
      {
        iconName: "plus",
        iconType: "font-awesome",
        text: "Mais",
        clickFunction: () => {
          Linking.openURL("facebook://app");
        },
      },
    ];

    return (
      <ScrollView>
          <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", marginTop:30}}>
            {menuItens.map((a) => {
              return (
                <View style={{width:"50%",alignItems:"center"}}>
                  <MenuCard
                    iconName={a.iconName}
                    iconType={a.iconType}
                    text={a.text}
                    clickFunction={a.clickFunction}
                  ></MenuCard>
                </View>
              );
            })}
          </View>
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
  
  type CardProps = {
    iconName: string;
    iconType: string;
    text: string;
    clickFunction: Function;
  };
  const MenuCard = ({ iconName, iconType, text, clickFunction }: CardProps) => {
    return (
      <React.Fragment>
        <Card containerStyle={Styles.card}>
          <Icon
            onPress={() => {
              clickFunction();
            }}
            name={iconName}
            type={iconType}
            color="white"
            iconStyle={Styles.icon}
          />
        </Card>
        <Text style={Styles.cardText}>{text}</Text>
      </React.Fragment>
    );
  };
  