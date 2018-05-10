import React from 'react';
import { StackNavigator } from 'react-navigation';
import PictureList from './src/pictureList';
import HowOld from './src/howOld';
import { COLOR } from './src/constants/styleGuide';

const App = StackNavigator({
  PictureList: {
    screen: PictureList,
    navigationOptions: {
      title: '首页',
    },
  },
  HowOld: {
    screen: HowOld,
    navigationOptions: {
      title: '怎么老是你',
    },
  },
}, {
  initialRouteName: 'PictureList',
  navigationOptions: {
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: COLOR.BLUE,
    },
    headerTintColor: COLOR.WHITE,
  }
})

export default App
