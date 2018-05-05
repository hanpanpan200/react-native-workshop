import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ImageStore } from 'react-native';
import ImagePicker, { showImagePicker } from "react-native-image-picker";
import Swiper from 'react-native-swiper';
import { COLOR } from './constants/styleGuide';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import { SCREEN_WIDTH } from './constant';

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

const options = {
  title: 'Use your own photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
}

export default class PictureList extends React.Component {
  goHowOld = (image) => {
    this.props.navigation.navigate(
      'HowOld',
      { selectedImage: image1},
    )
  }

  showImagePicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
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
          <View style={styles.slide}>
            <Image style={styles.image} source={image1}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={image2}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={image3}/>
          </View>
        </Swiper>
        <Text onPress={this.goHowOld}>Press me to go to HowOld page.</Text>
        <Button onPress={this.showImagePicker} title="Use your own photo"/>
      </View>
    )
  }
}
