import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GENDER_MAP } from './constant'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderColor: '#5d8fc2',
    borderWidth: 5,
    zIndex: 100,
  }
});

const AgeInfo = ({ age, infoStyle, gender }) => (
  <View style={[styles.container, infoStyle]}>
    <Text>年龄：{age}岁</Text>
    <Text>性别：{GENDER_MAP[gender]}</Text>
  </View>
);

export default AgeInfo;