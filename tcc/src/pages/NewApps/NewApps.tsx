import React, { useState } from 'react';
import { View, ScrollView, Text, Image, Linking, TextInput, ImageURISource, Animated } from 'react-native';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';
import { Styles } from './NewApps.style';
import { Icon } from 'react-native-elements';
import CustomModal from '../../components/CustomModal/CustomModal';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


interface App {
    appName: string;
    url: string;
    appImage: ImageURISource;
    packageName: string;
}

const NewApps = () => {
    const apps = [
        {
            appName: 'Configurações',
            url: '',
            appImage: require('../../../assets/settings-logo.png'),
            packageName: '',
        },
        {
            appName: 'Calendário',
            url: 'content://com.android.calendar/time/',
            appImage: require('../../../assets/calendar-logo.png'),
            packageName: '',
        },
        {
            appName: 'Gmail',
            url: 'mailto:',
            appImage: require('../../../assets/gmail-logo.png'),
            packageName: '',
        },
        {
            appName: 'Google',
            url: 'https://google.com/',
            appImage: require('../../../assets/google-logo.png'),
            packageName: '',
        },
        {
            appName: 'Play Store',
            url: 'https://play.google.com/store',
            appImage: require('../../../assets/google-play-logo.png'),
            packageName: '',
        },
        {
            appName: 'Spotify',
            url: 'spotify://app',
            appImage: require('../../../assets/spotify-logo.png'),
            packageName: 'com.spotify.music',
        },
        {
            appName: 'Telegram',
            url: 'tg://app',
            appImage: require('../../../assets/telegram-logo.png'),
            packageName: 'org.telegram.messenger',
        },
        {
            appName: 'Uber',
            url: 'uber://app',
            appImage: require('../../../assets/uber-logo.png'),
            packageName: 'com.ubercab',
        },
        {
            appName: 'Uber Eats',
            url: 'ubereats://app',
            appImage: require('../../../assets/uber-eats-logo.png'),
            packageName: 'com.ubercab.eats',
        },
        {
            appName: 'Youtube',
            url: 'vnd.youtube:',
            appImage: require('../../../assets/youtube-logo.png'),
            packageName: '',
        },
    ]
    const [searchedApps, setSearchedApps] = useState<App[]>(apps);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
    const [packageName, setPackageName] = useState('');

    const openApp = (appName: string, url: string, appPackage: string) => {
        if (appName === 'Configurações') {
            startActivityAsync(ActivityAction.SETTINGS);
        }
        else {
            Linking.canOpenURL(url)
            .then(supported => {
                if (!supported) {
                    setPackageName(appPackage);
                    setIsOpenModal(true);
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch(err => alert(err));
        }
    }

    const toogleSearchedApps = (searchedValue: string) => {
        const results: App[] = apps.filter((app: { appName: string }) =>
            app.appName.toLowerCase().includes(searchedValue.toLowerCase()),
        );
        setSearchedApps(results);
    };

    const installApp = () => {
        const storeUrl = `https://play.google.com/store/apps/details?id=${packageName}`; 
        Linking.canOpenURL(storeUrl)
            .then(supported => {
                if (!supported) {
                    setIsOpenModal(true);
                } else {
                    return Linking.openURL(storeUrl);
                }
            })
            .catch(err => alert(err));
    }

    return (
        <ScrollView >
            <View>
                <View style={Styles.modalView}>
                    {isOpenModal &&
                        <CustomModal
                            modalTitle='Você não possui esse aplicativo instalado no seu celular. Deseja instalar ?'
                            handleFirstOption={installApp}
                            handleCancelOption={() => setIsOpenModal(false)}
                            firstOptionTitle={'Instalar'}
                            showIcon={false}
                        />
                    }
                    {isOpenErrorModal &&
                        <CustomModal
                            modalTitle='Não foi possível instalar o aplicativo'
                            handleFirstOption={() => setIsOpenErrorModal(false)}
                            firstOptionTitle={'OK'}
                            showIcon={false}
                        />
                    }
                </View>
                <View style={Styles.searchSection} >
                    <TextInput
                        style={Styles.input}
                        placeholder="Pesquisar aplicativo"
                        placeholderTextColor="gray"
                        onChangeText={(text) => toogleSearchedApps(text)}
                    />
                    <Icon
                        name={"search"}
                        type={"font-awesome"}
                        color="#aa5c9f"
                        iconStyle={Styles.searchIcon}
                    />
                </View>
                {searchedApps.map((item, key) => {
                    return (
                        <TouchableWithoutFeedback key={key} onPress={() => openApp(item.appName, item.url, item.packageName)}>
                            <Animated.View
                                style={Styles.listContainer}>
                                <Image source={item.appImage} style={Styles.imageContainer} />
                                <Text style={Styles.options} >
                                    {item.appName}
                                </Text>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </View>
        </ScrollView>
    );
}

export default NewApps;