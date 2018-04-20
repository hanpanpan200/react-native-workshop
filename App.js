import React from 'react';
import { StackNavigator } from 'react-navigation';
import PictureList from './src/pictureList';
import HowOld from './src/howOld';
import Result from './src/result';

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
  },
  Result: {
    screen: Result,
    navigationOptions: {
      title: 'How Old Result',
    },
  },

})

export default App
