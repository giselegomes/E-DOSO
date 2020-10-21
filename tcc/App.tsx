import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>E-doso</Text>
        <Card>
          <Card.Title>
            Whatsapp
          </Card.Title>
          <Icon
            name='whatsapp'
            type='font-awesome'
            color='green' />
        </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: "bold"
  }
});
