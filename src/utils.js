import { Platform, Image } from 'react-native';
import { SCREEN_WIDTH } from './constants/constant'
import _ from 'lodash';
import RNFetchBlob from 'react-native-fetch-blob';

const FACE_ID_URL = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender'
const FACE_API_KEY = '1cdd37c89ab34fcaa81329dfbded2c9a'

export const howOldCheck = imagePath => (
  new Promise((resolve, reject) => {
    if (!_.includes(imagePath, 'https')) {
      const imageUrl = Platform.OS === 'ios' ? _.replace(imagePath, 'file://', '')  : imagePath;
      const uploadConfig = {
        'Content-Type' : 'multipart/form-data',
        'Ocp-Apim-Subscription-Key': FACE_API_KEY,
      }

      RNFetchBlob.fetch('POST', FACE_ID_URL, uploadConfig, RNFetchBlob.wrap(imageUrl))
        .then(res=> {
          const faceInfo = _.get(res, 'data');
          const faceJsonInfo = _.isEmpty(faceInfo) ? null : JSON.parse(faceInfo);
          const error = _.get(faceJsonInfo, 'error');

          if(_.isEmpty(faceJsonInfo) || !_.isEmpty(error)) {
            return reject();
          }
          return resolve(faceJsonInfo);
        })
        .catch(error => reject())
    } else {
      fetch(FACE_ID_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': FACE_API_KEY,
        },
        body: JSON.stringify({
          url: imagePath,
        })})
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return reject()
        })
        .catch((error) => reject());
    }
  })
);

export const calculateImageScale = image => (
  new Promise((resolve, reject) => {
    Image.getSize(image, imageWidth => {
      const scale = SCREEN_WIDTH / imageWidth;
      resolve(scale);
    }, err => reject(err));
  })
);
