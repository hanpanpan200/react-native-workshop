import React from 'react';
import { View, Text, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import _ from 'lodash';
import { howOldCheck } from './utils';
import { COLOR } from './constants/styleGuide';

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
});

export default class HowOld extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    howOldCheck(this.imagePath).then(ageInfo => {
      console.log('ageInfo====', ageInfo);
      this.setState({ loading: false });
    }).catch(() => {
      this.setState({ loading: false });
      Alert.alert('获取数据失败，请重试');
    })
  }

  get imagePath() {
    return _.get(this.props, 'navigation.state.params.selectedImage')
  }

  render() {
    console.log('this.state=====', this.state);
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
           <Image source={{uri: this.imagePath}} style={styles.image} />
        </View>
      </View>
    )
  }
}
