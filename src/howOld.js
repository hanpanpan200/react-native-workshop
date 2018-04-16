import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

import image1 from '../images/image1.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 400,
    height: 400,
  },
  rectangle: {
    top: 62,
    left: 175,
    width: 74,
    height: 75,
    backgroundColor: '#000000',
    position: 'absolute',
  }
})

export default class HowOld extends React.Component {

  componentDidMount() {
    const { params } = this.props.navigation.state;

    // console.log('iamge base64', params.selectedImage);
      RNFetchBlob.fetch('POST', 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age', {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': '2b536e05b0df4b98ad0c45101eeba593',
      }, RNFetchBlob.wrap("params.selectedImage"))
        .then((res) => {
          console.log('res', res);
          console.log(res)
        })
        .catch((err) => {
          console.log('err', err);
        })

  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>How Old Page</Text>
        <View style={styles.imageContainer}>
          {/* <Image source={params.selectedImage} style={styles.image} /> */}
          <View style={styles.rectangle}></View>
        </View>
      </View>
    )
  }
}