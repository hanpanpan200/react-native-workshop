import React from 'react';
import { View, Text, StyleSheet, Image, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { howOldCheck } from './utils';
import { COLOR } from './constants/styleGuide';
import Loading from './Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50,
  },
  image: {
    width: 400,
    height: 400,
  },
  buttonContainer: {
    marginTop: 50,
    width: 250,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.BLUE,
  },
  disabled: {
    backgroundColor: 'rgba(4, 139, 168, 0.6)',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR.WHITE,
  }, 
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

  redirectToHome = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {loading && <Loading text="分析中" />}
        <View style={styles.imageContainer}>
           <Image source={{uri: this.imagePath}} style={styles.image} />
        </View>
        <TouchableOpacity style={[styles.buttonContainer, loading ? styles.disabled : null]} onPress={this.redirectToHome}>
          <Text style={styles.buttonText}>重新选一张</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
