import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GENDER_MAP } from './constants/constant'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderColor: '#f2c034',
    borderWidth: 3,
    zIndex: 100,
  },
  textStyle: {
    fontSize: 12,
    color: '#fd7039',
    fontWeight: 'bold',
  }
});

const AgeInfo = ({ age, infoStyle, gender }) => (
  <View style={[styles.container, infoStyle]}>
    <Text style={styles.textStyle}>年龄：{age}岁</Text>
    <Text style={styles.textStyle}>性别：{GENDER_MAP[gender]}</Text>
  </View>
);

export default AgeInfo;