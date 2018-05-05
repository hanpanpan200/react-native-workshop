import { AppRegistry } from 'react-native';
import App from './App';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

AppRegistry.registerComponent('HowOldApp', () => App);
