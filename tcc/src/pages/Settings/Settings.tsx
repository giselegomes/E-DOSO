import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Styles } from './Settings.style';
import { Icon } from 'react-native-elements';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const navigation = useNavigation();
    const openWifiSettings = () => {
      startActivityAsync(ActivityAction.WIFI_SETTINGS);
    }

    const openDisplaySettings = () => {
      startActivityAsync(ActivityAction.DISPLAY_SETTINGS);
    }

    const showTutorialPage = () => {
      navigation.navigate('Tutorial');
    }

    return (
        <ScrollView >
            <View 
            style={Styles.list}>
                <Icon
                  name={"font"}
                  type={"font-awesome"}
                  color="#aa5c9f"
                  iconStyle={Styles.searchIcon}
                />
                <Text 
                  style={Styles.options} 
                  onPress={() => openDisplaySettings()}
                >
                  Tamanho da fonte
                </Text>
            </View>
            <View 
            style={Styles.list}>
                <Icon
                  name={"wifi"}
                  type={"font-awesome"}
                  color="#aa5c9f"
                  iconStyle={Styles.searchIcon}
                />
                <Text
                  style={Styles.options} 
                  onPress={() => openWifiSettings()}
                >
                  Rede e Internet
                </Text>
            </View>
            <View 
            style={Styles.list}>
                <Icon
                  name={"question-circle"}
                  type={"font-awesome"}
                  color="#aa5c9f"
                  iconStyle={Styles.searchIcon}
                />
                <Text
                  style={Styles.options} 
                  onPress={() => showTutorialPage()}
                >
                  Ajuda
                </Text>
            </View>
        </ScrollView>
    );
}

export default Settings;