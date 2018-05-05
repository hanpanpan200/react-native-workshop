import React from 'react';
import { StackNavigator } from 'react-navigation';
import PictureList from './src/pictureList';
import HowOld from './src/howOld';
import Result from './src/result';
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
  Result: {
    screen: Result,
    navigationOptions: {
      title: 'How Old Result',
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
