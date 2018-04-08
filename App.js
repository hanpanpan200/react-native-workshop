import React from 'react';
import { StackNavigator } from 'react-navigation';
import PictureList from './src/pictureList';
import HowOld from './src/howOld';

const App = StackNavigator({
  PictureList: {
    screen: PictureList,
    navigationOptions: {
      title: 'Picture List',
    },
  },
  HowOld: {
    screen: HowOld,
    navigationOptions: {
      title: 'How Old',
    },
  }
}) 

export default App
