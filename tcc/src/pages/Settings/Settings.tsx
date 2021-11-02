import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Styles } from './Settings.style';
import { Icon } from 'react-native-elements';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';

const Settings = () => {

    const openWifiSettings = () => {
      startActivityAsync(ActivityAction.WIFI_SETTINGS);
    }

    const openDisplaySettings = () => {
      startActivityAsync(ActivityAction.DISPLAY_SETTINGS);
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
        </ScrollView>
    );
}

export default Settings;