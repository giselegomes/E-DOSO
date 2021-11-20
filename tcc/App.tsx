import React from 'react';
import Routes from './src/routes';
import {useFonts,Inter_900Black,} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'

  export default function App() {
    //fica na tela de splash até que as fontes sejam carregadas 
    const [fontsLoaded] = useFonts({
      Inter_900Black,
  });

if(!fontsLoaded){
    return <AppLoading/>
}

    return (
      <Routes />
    )
}