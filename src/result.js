import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import AgeInfo from './ageInfo'
import { imageWithThreePeople } from '../images/imageSample'
import { responseInfo, SCREEN_WIDTH, SCREEN_HEIGHT } from './constant'

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
  constructor(props) {
    super(props);
    this.imageScale = 0;
    this.imageMargin = 0;
    this.state = {
      ageInfos: [],
    }
  }

  componentDidMount() {
    Image.getSize(imageWithThreePeople, (imageWidth, imageHeight) => {
      const scale = SCREEN_WIDTH / imageWidth;
      this.imageScale = scale;
      this.imageMargin = (SCREEN_HEIGHT - (imageHeight * scale))/2;

      this.setState({ageInfos: responseInfo});
    });
  }

  renderAgaIno() {
    return (this.state.ageInfos.map((ageInfo) => {
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
        key={ageInfo.faceId}/>
      )
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {this.renderAgaIno()}
          <Image
            style={styles.image}
            source={{uri:imageWithThreePeople}}
            resizeMode="contain"
          />
        </View>
      </View>
    )
  }
}