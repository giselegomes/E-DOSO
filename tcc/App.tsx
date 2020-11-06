import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card,Icon } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";
import "./assets/App.css"

export default function App() {
  return (
    <View style={styles.container}>
        <Row>
          <Col>
            <Card containerStyle={styles.card}>
              <Icon 
                name='whatsapp'
                type='font-awesome'
                color='white'
                iconStyle={styles.icon} />
            </Card>
            <Text style={styles.cardText}>Whatsapp</Text>
          </Col>
          <Col>
            <Card containerStyle={styles.card}>
              <Icon 
                name='facebook'
                type='font-awesome'
                color='white'
                iconStyle={styles.icon} />
            </Card>
            <Text style={styles.cardText}>Facebook</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card containerStyle={styles.card}>
              <Icon 
                name='phone'
                type='font-awesome'
                color='white'
                iconStyle={styles.icon} />
            </Card>
            <Text style={styles.cardText}>Chamadas</Text>
          </Col>
          <Col>
            <Card containerStyle={styles.card}>
              <Icon 
                name='image'
                type='font-awesome'
                color='white'
                iconStyle={styles.icon} />
            </Card>
            <Text style={styles.cardText}>Fotos</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card containerStyle={styles.card}>
              <Icon 
                name='camera'
                type='font-awesome'
                color='white'
                iconStyle={styles.icon} />
            </Card>
            <Text style={styles.cardText}>Camera</Text>
          </Col>
          <Col>
            <Card containerStyle={styles.card}>
              <Icon 
                name='microphone'
                type='font-awesome'
                color='white'
                iconStyle={styles.icon} />
            </Card>
            <Text style={styles.cardText}>Microfone</Text>
          </Col>
        </Row>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ice',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: "bold"
  },

  card : {
    backgroundColor: 'purple',
    borderWidth: 0,
    borderRadius: 4,
    width:120
  },

  cardText: {
    textAlign: "center"
  },

  icon:{
    fontSize: 70
  }
});
