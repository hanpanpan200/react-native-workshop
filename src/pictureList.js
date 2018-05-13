import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableWithoutFeedback } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Swiper from 'react-native-swiper';
import { COLOR } from './constants/styleGuide';
import { SCREEN_WIDTH } from './constants/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  },
})

const IMAGE_PICKER_OPTIONS = {
  title: '自选图片',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选取照片',
}

const DEFAULT_IMAGES = [
  'https://raw.githubusercontent.com/ThoughtWorksWuhanUI/react-native-workshop/master/images/image1%402x.png',
  'https://raw.githubusercontent.com/ThoughtWorksWuhanUI/react-native-workshop/master/images/image2%402x.png',
  'https://raw.githubusercontent.com/ThoughtWorksWuhanUI/react-native-workshop/master/images/image3%402x.png'
];

export default class PictureList extends React.Component {
  goHowOld = (selectedImage) => this.props.navigation.navigate('HowOld', { selectedImage })

  showImagePicker = () => {
    ImagePicker.showImagePicker(IMAGE_PICKER_OPTIONS, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.props.navigation.navigate('HowOld', {
          selectedImage: response.uri,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper activeDotColor={COLOR.BLUE}>
          {DEFAULT_IMAGES.map((uri) => (
            <TouchableWithoutFeedback key={uri} onPress={() => this.goHowOld(uri)}>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri}}/>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </Swiper>
        <Button onPress={this.showImagePicker} title="自选图片"/>
      </View>
    )
  }
}
