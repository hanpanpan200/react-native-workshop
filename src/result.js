import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import _ from 'lodash';
import Loading from './Loading';
import AgeInfo from './ageInfo'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './constants/constant'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: SCREEN_WIDTH,
    height: 'auto',
  }
});

export default class Result extends React.Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    Image.getSize(this.imagePath, (imageWidth, imageHeight) => {
      const scale = SCREEN_WIDTH / imageWidth;
      this.imageScale = scale;
      this.imageMargin = (SCREEN_HEIGHT - (imageHeight * scale))/2;
      this.setState({ loading: false })
    });
  }

  get imagePath() {
    return _.get(this.props, 'navigation.state.params.imagePath')
  }

  get ageInfos() {
    return _.get(this.props, 'navigation.state.params.ageInfos')
  }

  renderAgeInfo() {
    if (this.state.loading) return null;
    return (this.ageInfos.map((ageInfo) => {
      const { top, left, width, height} = ageInfo.faceRectangle;
      const style = {
        top: (top * this.imageScale) + this.imageMargin,
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
    return (
      <View style={styles.container}>
        {this.renderAgeInfo()}
        <Image
          style={styles.image}
          source={{uri: this.imagePath}}
          resizeMode="contain"
        />
      </View>
    )
  }
}