import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GENDER_MAP } from './constants/constant'
import { COLOR } from "./constants/styleGuide";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderWidth: 3,
    borderColor: COLOR.GREEN,
    zIndex: 100,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR.WHITE,
  },
  infoContainer: {
    position: 'absolute',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    backgroundColor: COLOR.GREEN,
  },
  triangle: {
    position: 'absolute',
    bottom: -9,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 10,
    backgroundColor: COLOR.TRANSPARENT,
    borderLeftColor: COLOR.TRANSPARENT,
    borderRightColor: COLOR.TRANSPARENT,
    borderTopColor: COLOR.GREEN,
  },
});

const AgeInfo = ({ age, infoStyle, gender }) => (
  <View style={[styles.container, infoStyle]}>
    <View style={[styles.infoContainer, {bottom: infoStyle.height + 5}]}>
      <Text style={styles.textStyle}>{GENDER_MAP[gender]}{age}岁</Text>
      <View style={styles.triangle}></View>
    </View>
  </View>
);

export default AgeInfo;