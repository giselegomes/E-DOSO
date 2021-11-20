import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Linking, ScrollView, Platform } from "react-native";
import { Card, Icon } from "react-native-elements";
import { Styles } from "./Home.style";
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import AppLink from 'react-native-app-link';
import VoiceRecord from "../../components/VoiceRecorder/VoiceRecorder";

export default function App() {
  const navigation = useNavigation();
  const [torchState, setTorchState] = useState(false);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Null access to camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const menuItens = [
    {
      iconName: "whatsapp",
      iconType: "font-awesome",
      text: "Whatsapp",
      clickFunction: () => {
        AppLink.maybeOpenURL("whatsapp://app", {
          appName: "Whatsapp",
          appStoreId: 310633997,
          appStoreLocale: 'br',
          playStoreId: "com.whatsapp"
        });
      },
    },
    {
      iconName: "facebook",
      iconType: "font-awesome",
      text: "Facebook",
      clickFunction: () => {
        Linking.openURL("https://www.facebook.com/");
      }
    },
    {
      iconName: "phone",
      iconType: "font-awesome",
      text: "Chamadas",
      clickFunction: () => {
        Linking.openURL(`tel:`);
      },
    },
    {
      iconName: "image",
      iconType: "font-awesome",
      text: "Fotos",
      clickFunction: () => {
        switch (Platform.OS) {
          case "ios":
            Linking.openURL("photos-redirect://");
            break;
          case "android":
            Linking.openURL("content://media/internal/images/media");
            break;
          default:
            console.log("Could not open gallery app");
        }
      }
    },
    {
      iconName: "camera",
      iconType: "font-awesome",
      text: "Camera",
      clickFunction: () => {
        navigation.navigate('Camera', { zoomMode: false });
      },
    },
    {
      iconName: "microphone",
      iconType: "font-awesome",
      text: "Microfone",
      clickFunction: () => {
        setIsRecordingVoice(true);
      },
    },
    {
      iconName: "search",
      iconType: "font-awesome",
      text: "Lupa",
      clickFunction: () => {
        navigation.navigate('Camera', { zoomMode: true });
      },
    },
    {
      iconName: "user-plus",
      iconType: "font-awesome",
      text: "Criar Contato",
      clickFunction: () => {
        navigation.navigate('NewContact', { param: 'create' });
      },
    },
    {
      iconName: "users",
      iconType: "font-awesome",
      text: "Contatos",
      clickFunction: () => {
        navigation.navigate('ListContacts', { isEmergency: false });
      },
    },
    {
      iconName: "first-aid",
      iconType: "font-awesome-5",
      text: "Emergência",
      clickFunction: () => {
        navigation.navigate('ListEmergencyContacts', { contact: null })
      },
    },
    {
      iconName: "capsules",
      iconType: "font-awesome-5",
      text: "Remédios",
      clickFunction: () => {
        navigation.navigate('ListMedicine', { param: 'create' });
      },
    },
    {
      iconName: "lightbulb",
      iconType: "font-awesome-5",
      text: "Lanterna",
      clickFunction: () => {
        setTorchState(!torchState);
      },
    },
    {
      iconName: "plus",
      iconType: "font-awesome",
      text: "Mais",
      clickFunction: () => {
        navigation.navigate('NewApps');
      },
    },
    {
      iconName: "cog",
      iconType: "font-awesome",
      text: "Ajustes",
      clickFunction: () => {
        navigation.navigate('Settings');
      },
    },
  ];

  const handleVoiceRecordResults = (results: string[]) => {
    const convertedResults  = results.map(item => item.toUpperCase());
    menuItens.map(item => {
    if (convertedResults.includes(item.text.toUpperCase())) {
      item.clickFunction();
    }
    })
  };

  return (
    <ScrollView>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {isRecordingVoice && (
          <VoiceRecord 
            handleVoiceRecordResults={handleVoiceRecordResults} 
          />
        )}
        {menuItens.map((a) => {
          return (
            <View key={a.text} style={{ width: "50%", alignItems: "center" }}>
              <MenuCard
                iconName={a.iconName}
                iconType={a.iconType}
                text={a.text}
                clickFunction={a.clickFunction}
              ></MenuCard>
            </View>
          );
        })}
        {
          torchState == true && 
          <Camera flashMode={Camera.Constants.FlashMode.torch}></Camera>
        }
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
