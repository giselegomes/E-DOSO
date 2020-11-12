import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Linking, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";

export default function App() {
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
        Linking.openURL("facebook://app");
      },
    },
    {
      iconName: "first-aid",
      iconType: "font-awesome-5",
      text: "Emergência",
      clickFunction: () => {
        Linking.openURL("facebook://app");
      },
    },
    {
      iconName: "capsules",
      iconType: "font-awesome-5",
      text: "Remédios",
      clickFunction: () => {
        Linking.openURL("facebook://app");
      },
    },
    {
      iconName: "users",
      iconType: "font-awesome",
      text: "Contatos",
      clickFunction: () => {
        Linking.openURL("facebook://app");
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
      <Card containerStyle={styles.card}>
        <Icon
          onPress={() => {
            clickFunction();
          }}
          name={iconName}
          type={iconType}
          color="white"
          iconStyle={styles.icon}
        />
      </Card>
      <Text style={styles.cardText}>{text}</Text>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 56,
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "purple",
    borderWidth: 0,
    borderRadius: 4,
    width: 120,
    alignContent: "center",
  },

  cardText: {
    textAlign: "center",
    fontSize: 24,
  },

  icon: {
    fontSize: 70,
  },

  row: {
    marginBottom: 140,
    display:"flex", 
    flexDirection:"row"
  },
});
