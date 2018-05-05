import { Platform } from 'react-native';
import _ from 'lodash';
import RNFetchBlob from 'react-native-fetch-blob';

const FACE_ID_URL = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age'

export const howOldCheck = imagePath => (
  new Promise((resolve, reject) => {
    const imageUrl = Platform.OS === 'ios' ? _.replace(imagePath, 'file://', '')  : imagePath;
    const uploadConfig = {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': '80a4a3de680a4ccbbf3a58558226c6f0',
    }
    RNFetchBlob.fetch('POST', FACE_ID_URL, uploadConfig, RNFetchBlob.wrap(imageUrl))
    .then(res=> resolve(res.data))
    .catch(error => reject())
  })
)