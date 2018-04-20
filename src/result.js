import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { imageWithThreePeople } from '../images/imageSample'

const Windows = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: Windows.width,
    height: 'auto',
  }
});

export default class Result extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri:imageWithThreePeople}}
            resizeMode="contain"
            ref="imageInfo"
          />
        </View>
      </View>
    )
  }
}