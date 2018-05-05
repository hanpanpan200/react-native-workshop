import { AppRegistry, StatusBar } from 'react-native';
import App from './App';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

StatusBar.setBarStyle('light-content')

AppRegistry.registerComponent('HowOldApp', () => App);
