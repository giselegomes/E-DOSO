import React from 'react';
import { TouchableOpacity, View, Text, Modal, GestureResponderEvent } from 'react-native';
import { Styles } from './CustomModal.style';

interface CustomModalProps {
    firstOptionTitle: string;
    secondOptionTitle?: string;
    modalTitle: string;
    handleFirstOption: (event: GestureResponderEvent) => void
    handleSecondOption?: (event: GestureResponderEvent) => void
    handleCancelOption?: (event: GestureResponderEvent) => void
    showIcon: boolean;

}

const CustomModal = (Props: CustomModalProps) => {
    return (
        <View style={Styles.container}>
        <Modal animationType={'fade'} transparent={false} visible={true} onRequestClose={() => Props.handleCancelOption}>
        <View style={Styles.modal}>
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
        </Modal>
        </View>
    );
}

export default CustomModal;