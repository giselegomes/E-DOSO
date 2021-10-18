
import React, { useEffect } from 'react';
import { Platform, GestureResponderEvent } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomModal from '../CustomModal/CustomModal';
interface CustomImagePickerProps {
  toogleImagePicker: (event: GestureResponderEvent) => void;
  toogleSetImage: (uri: string) => void
}

const CustomImagePicker = (Props: CustomImagePickerProps) => {

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const chooseFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      Props.toogleSetImage(result.uri)
    }
  };

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      Props.toogleSetImage(result.uri)
    }
  }

  return (
    <CustomModal
      modalTitle= 'Adicionar foto'
      handleFirstOption={chooseFromGallery}
      handleSecondOption={openCamera}
      handleCancelOption={Props.toogleImagePicker}
      firstOptionTitle={'Escolher da galeria'}
      secondOptionTitle={'Tirar nova foto'} />
  );
}

export default CustomImagePicker