import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ImagePicker, { showImagePicker } from "react-native-image-picker";
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

const options = {
  title: 'Use your own photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
}

export default class PictureList extends React.Component {
  goHowOld = () => {
    this.props.navigation.navigate('HowOld')
  }

  showImagePicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // TODO: need to check if we send the data or uri to howOld page
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.goHowOld}>Press me to go to HowOld page.</Text>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>

        <Button onPress={this.showImagePicker} title="Use your own photo" />
      </View>
    )
  }
}
