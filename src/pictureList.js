import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ImageStore } from 'react-native';
import ImagePicker, { showImagePicker } from "react-native-image-picker";
import Swiper from 'react-native-swiper';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

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
    width: 400,
    height: 400,
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
    // send params like {base64Data}
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
        this.props.navigation.navigate('Result')
        // TODO: need to check if we send the data or uri to howOld page
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper showsButtons={true}>
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
