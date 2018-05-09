import { Platform } from 'react-native';
import _ from 'lodash';
import RNFetchBlob from 'react-native-fetch-blob';

const FACE_ID_URL = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender'

export const howOldCheck = imagePath => (
  new Promise((resolve, reject) => {
    if (!_.includes(imagePath, 'https')) {
      const imageUrl = Platform.OS === 'ios' ? _.replace(imagePath, 'file://', '')  : imagePath;
      const uploadConfig = {
        'Content-Type' : 'multipart/form-data',
        'Ocp-Apim-Subscription-Key': '1cdd37c89ab34fcaa81329dfbded2c9a',
      }

      RNFetchBlob.fetch('POST', FACE_ID_URL, uploadConfig, RNFetchBlob.wrap(imageUrl))
        .then(res=> resolve(JSON.parse(res.data)))
        .catch(error => reject())
    } else {
      fetch(FACE_ID_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '1cdd37c89ab34fcaa81329dfbded2c9a',
        },
        body: JSON.stringify({
          url: imagePath,
        }),
      }).then((response) => resolve(response.json()))
        .catch((error) => reject());
    }
  })
)
