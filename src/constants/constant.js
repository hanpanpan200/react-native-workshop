import { Dimensions, Platform } from 'react-native'

const IS_IOS = Platform.OS === 'ios';
const NavBarHeightOrigin = IS_IOS ? 64 : 54;

const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = width;

export const SCREEN_HEIGHT = height - NavBarHeightOrigin;

export const GENDER_MAP = {
  female: '女神',
  male: '男神'
};

