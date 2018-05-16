import React from 'react';
import { View, Text, StyleSheet, Image, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import Loading from './Loading';
import AgeInfo from './ageInfo';
import { howOldCheck, calculateImageScale } from './utils';
import { COLOR } from './constants/styleGuide';
import { SCREEN_WIDTH } from './constants/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    marginTop: 50,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: SCREEN_WIDTH,
    height: 'auto',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
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
    const imagePath = this.imagePath;

    Promise.all([howOldCheck(imagePath), calculateImageScale(imagePath)]).then(([ageInfos, imageScale]) => {
      this.ageInfos = ageInfos;
      this.imageScale = imageScale;
      this.setState({ loading: false });
    }).catch(errorMessage => {
      this.ageInfos = [];
      this.imageScale = 0;
      this.setState({ loading: false });
      Alert.alert(errorMessage || '获取数据失败，请重试');
    })
  }

  get imagePath() {
    return _.get(this.props, 'navigation.state.params.selectedImage')
  }

  redirectToHome = () => {
    this.props.navigation.goBack()
  }

  renderAgeInfo() {
    if(_.isEmpty(this.ageInfos)) {
      return
    }

    return (this.ageInfos.map((ageInfo) => {
      const { top, left, width, height} = ageInfo.faceRectangle;
      const style = {
        top: top * this.imageScale + 50,
        left: left * this.imageScale,
        width: width * this.imageScale,
        height: height * this.imageScale,
      };
      return (
          <AgeInfo
              infoStyle={style}
              age={ageInfo.faceAttributes.age}
              gender={ageInfo.faceAttributes.gender}
              key={ageInfo.faceId}
          />
      )
    }))
  }

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {loading && <Loading text="分析中" />}
        <View style={styles.imageContainer}>
           {!loading && this.renderAgeInfo()}
           <Image source={{uri: this.imagePath}} style={styles.image}
                  resizeMode="contain"/>
        </View>
        <TouchableOpacity style={[styles.buttonContainer, loading ? styles.disabled : null]} onPress={this.redirectToHome}>
          <Text style={styles.buttonText}>重新选一张</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
