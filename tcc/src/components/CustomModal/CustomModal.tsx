import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ActionSheetIOS, GestureResponderEvent } from 'react-native';
import { Styles } from './CustomModal.style';
import { Icon } from 'react-native-elements';

interface CustomModalProps {
    firstOptionTitle: string;
    secondOptionTitle?: string;
    modalTitle: string;
    handleFirstOption: (event: GestureResponderEvent) => void
    handleSecondOption?: (event: GestureResponderEvent) => void
    handleCancelOption: (event: GestureResponderEvent) => void

}

const CustomModal = (Props: CustomModalProps) => {
    return (

        <View style={Styles.modal}>

            <View style={Styles.iconContainer}>
                <Icon
                    name={"times-circle"}
                    type={"font-awesome"}
                    color="white"
                    iconStyle={Styles.icon}
                    onPress={Props.handleCancelOption}
                />
            </View>
            <Text style={Styles.modalTitle}>{Props.modalTitle}</Text>
            <TouchableOpacity style={Styles.buttonImage} onPress={Props.handleFirstOption}>
                <Text style={Styles.buttonText}>{Props.firstOptionTitle}</Text>
            </TouchableOpacity>
            {Props.secondOptionTitle &&
              <TouchableOpacity style={Styles.buttonImage} onPress={Props.handleSecondOption}>
                <Text style={Styles.buttonText}>{Props.secondOptionTitle}</Text>
              </TouchableOpacity>
            }
            <TouchableOpacity style={Styles.buttonCancel} onPress={Props.handleCancelOption}>
                <Text style={Styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default CustomModal;