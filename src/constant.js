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

export const responseInfo = [
  {
    "faceId": "9c7be2ea-ba24-4ac8-a88e-3b06c3c7d9cb",
    "faceRectangle": {
      "top": 62,
      "left": 175,
      "width": 74,
      "height": 75
    },
    "faceAttributes": {
      "hair": {
        "bald": 0.99,
        "invisible": false,
        "hairColor": []
      },
      "smile": 1.0,
      "headPose": {
        "pitch": 0.0,
        "roll": -5.1,
        "yaw": 0.4
      },
      "gender": "male",
      "age": 29.6,
      "facialHair": {
        "moustache": 0.2,
        "beard": 0.4,
        "sideburns": 0.1
      },
      "glasses": "NoGlasses",
      "makeup": {
        "eyeMakeup": false,
        "lipMakeup": false
      },
      "emotion": {
        "anger": 0.0,
        "contempt": 0.0,
        "disgust": 0.0,
        "fear": 0.0,
        "happiness": 1.0,
        "neutral": 0.0,
        "sadness": 0.0,
        "surprise": 0.0
      },
      "occlusion": {
        "foreheadOccluded": false,
        "eyeOccluded": false,
        "mouthOccluded": false
      },
      "accessories": [],
      "blur": {
        "blurLevel": "low",
        "value": 0.0
      },
      "exposure": {
        "exposureLevel": "goodExposure",
        "value": 0.65
      },
      "noise": {
        "noiseLevel": "low",
        "value": 0.0
      }
    },
    "faceLandmarks": {
      "pupilLeft": {
        "x": 195.0,
        "y": 84.8
      },
      "pupilRight": {
        "x": 229.1,
        "y": 81.5
      },
      "noseTip": {
        "x": 213.4,
        "y": 100.6
      },
      "mouthLeft": {
        "x": 196.8,
        "y": 117.3
      },
      "mouthRight": {
        "x": 230.3,
        "y": 115.2
      },
      "eyebrowLeftOuter": {
        "x": 181.0,
        "y": 79.2
      },
      "eyebrowLeftInner": {
        "x": 200.9,
        "y": 74.0
      },
      "eyeLeftOuter": {
        "x": 189.6,
        "y": 86.1
      },
      "eyeLeftTop": {
        "x": 194.7,
        "y": 82.8
      },
      "eyeLeftBottom": {
        "x": 195.2,
        "y": 87.7
      },
      "eyeLeftInner": {
        "x": 200.2,
        "y": 85.3
      },
      "eyebrowRightInner": {
        "x": 219.9,
        "y": 72.1
      },
      "eyebrowRightOuter": {
        "x": 239.2,
        "y": 73.7
      },
      "eyeRightInner": {
        "x": 223.5,
        "y": 83.5
      },
      "eyeRightTop": {
        "x": 228.5,
        "y": 79.7
      },
      "eyeRightBottom": {
        "x": 229.8,
        "y": 84.6
      },
      "eyeRightOuter": {
        "x": 234.6,
        "y": 81.5
      },
      "noseRootLeft": {
        "x": 207.3,
        "y": 85.3
      },
      "noseRootRight": {
        "x": 216.7,
        "y": 84.4
      },
      "noseLeftAlarTop": {
        "x": 204.2,
        "y": 96.6
      },
      "noseRightAlarTop": {
        "x": 221.1,
        "y": 94.5
      },
      "noseLeftAlarOutTip": {
        "x": 199.9,
        "y": 102.7
      },
      "noseRightAlarOutTip": {
        "x": 226.3,
        "y": 99.9
      },
      "upperLipTop": {
        "x": 214.2,
        "y": 111.3
      },
      "upperLipBottom": {
        "x": 214.3,
        "y": 115.2
      },
      "underLipTop": {
        "x": 216.0,
        "y": 124.5
      },
      "underLipBottom": {
        "x": 216.1,
        "y": 130.0
      }
    }
  },
  {
    "faceId": "ca5a9ccb-5dda-4b55-8ab4-87f2fa6f30e6",
    "faceRectangle": {
      "top": 71,
      "left": 32,
      "width": 69,
      "height": 69
    },
    "faceAttributes": {
      "hair": {
        "bald": 0.01,
        "invisible": false,
        "hairColor": [
          {
            "color": "brown",
            "confidence": 1.0
          },
          {
            "color": "black",
            "confidence": 0.91
          },
          {
            "color": "other",
            "confidence": 0.52
          },
          {
            "color": "red",
            "confidence": 0.09
          },
          {
            "color": "gray",
            "confidence": 0.08
          },
          {
            "color": "blond",
            "confidence": 0.02
          }
        ]
      },
      "smile": 1.0,
      "headPose": {
        "pitch": 0.0,
        "roll": 5.5,
        "yaw": 9.2
      },
      "gender": "female",
      "age": 33.2,
      "facialHair": {
        "moustache": 0.0,
        "beard": 0.0,
        "sideburns": 0.0
      },
      "glasses": "NoGlasses",
      "makeup": {
        "eyeMakeup": true,
        "lipMakeup": false
      },
      "emotion": {
        "anger": 0.0,
        "contempt": 0.0,
        "disgust": 0.0,
        "fear": 0.0,
        "happiness": 1.0,
        "neutral": 0.0,
        "sadness": 0.0,
        "surprise": 0.0
      },
      "occlusion": {
        "foreheadOccluded": false,
        "eyeOccluded": false,
        "mouthOccluded": false
      },
      "accessories": [],
      "blur": {
        "blurLevel": "low",
        "value": 0.0
      },
      "exposure": {
        "exposureLevel": "goodExposure",
        "value": 0.65
      },
      "noise": {
        "noiseLevel": "medium",
        "value": 0.34
      }
    },
    "faceLandmarks": {
      "pupilLeft": {
        "x": 51.3,
        "y": 88.2
      },
      "pupilRight": {
        "x": 83.6,
        "y": 92.4
      },
      "noseTip": {
        "x": 69.2,
        "y": 108.1
      },
      "mouthLeft": {
        "x": 50.7,
        "y": 119.4
      },
      "mouthRight": {
        "x": 78.7,
        "y": 122.5
      },
      "eyebrowLeftOuter": {
        "x": 39.0,
        "y": 79.8
      },
      "eyebrowLeftInner": {
        "x": 63.1,
        "y": 80.2
      },
      "eyeLeftOuter": {
        "x": 46.9,
        "y": 87.6
      },
      "eyeLeftTop": {
        "x": 52.9,
        "y": 86.8
      },
      "eyeLeftBottom": {
        "x": 52.0,
        "y": 90.1
      },
      "eyeLeftInner": {
        "x": 57.5,
        "y": 89.9
      },
      "eyebrowRightInner": {
        "x": 78.6,
        "y": 81.6
      },
      "eyebrowRightOuter": {
        "x": 96.0,
        "y": 84.8
      },
      "eyeRightInner": {
        "x": 78.8,
        "y": 92.6
      },
      "eyeRightTop": {
        "x": 84.7,
        "y": 91.0
      },
      "eyeRightBottom": {
        "x": 84.0,
        "y": 94.4
      },
      "eyeRightOuter": {
        "x": 89.4,
        "y": 93.5
      },
      "noseRootLeft": {
        "x": 65.1,
        "y": 90.8
      },
      "noseRootRight": {
        "x": 73.6,
        "y": 91.9
      },
      "noseLeftAlarTop": {
        "x": 60.5,
        "y": 100.9
      },
      "noseRightAlarTop": {
        "x": 76.5,
        "y": 102.6
      },
      "noseLeftAlarOutTip": {
        "x": 55.5,
        "y": 105.6
      },
      "noseRightAlarOutTip": {
        "x": 80.5,
        "y": 108.3
      },
      "upperLipTop": {
        "x": 67.6,
        "y": 116.1
      },
      "upperLipBottom": {
        "x": 67.1,
        "y": 119.2
      },
      "underLipTop": {
        "x": 64.9,
        "y": 127.4
      },
      "underLipBottom": {
        "x": 64.0,
        "y": 131.8
      }
    }
  },
  {
    "faceId": "3055af9f-6aa9-4c2a-bdbb-603efe955a19",
    "faceRectangle": {
      "top": 129,
      "left": 122,
      "width": 52,
      "height": 52
    },
    "faceAttributes": {
      "hair": {
        "bald": 0.01,
        "invisible": false,
        "hairColor": [
          {
            "color": "brown",
            "confidence": 1.0
          },
          {
            "color": "black",
            "confidence": 0.89
          },
          {
            "color": "blond",
            "confidence": 0.34
          },
          {
            "color": "gray",
            "confidence": 0.08
          },
          {
            "color": "other",
            "confidence": 0.08
          },
          {
            "color": "red",
            "confidence": 0.04
          }
        ]
      },
      "smile": 0.0,
      "headPose": {
        "pitch": 0.0,
        "roll": 1.9,
        "yaw": -1.2
      },
      "gender": "female",
      "age": 0.8,
      "facialHair": {
        "moustache": 0.0,
        "beard": 0.0,
        "sideburns": 0.0
      },
      "glasses": "NoGlasses",
      "makeup": {
        "eyeMakeup": false,
        "lipMakeup": false
      },
      "emotion": {
        "anger": 0.0,
        "contempt": 0.0,
        "disgust": 0.0,
        "fear": 0.012,
        "happiness": 0.0,
        "neutral": 0.222,
        "sadness": 0.009,
        "surprise": 0.758
      },
      "occlusion": {
        "foreheadOccluded": false,
        "eyeOccluded": false,
        "mouthOccluded": false
      },
      "accessories": [],
      "blur": {
        "blurLevel": "low",
        "value": 0.0
      },
      "exposure": {
        "exposureLevel": "goodExposure",
        "value": 0.72
      },
      "noise": {
        "noiseLevel": "low",
        "value": 0.0
      }
    },
    "faceLandmarks": {
      "pupilLeft": {
        "x": 137.0,
        "y": 143.9
      },
      "pupilRight": {
        "x": 161.1,
        "y": 144.1
      },
      "noseTip": {
        "x": 147.9,
        "y": 152.8
      },
      "mouthLeft": {
        "x": 138.5,
        "y": 169.3
      },
      "mouthRight": {
        "x": 156.3,
        "y": 168.3
      },
      "eyebrowLeftOuter": {
        "x": 128.2,
        "y": 140.5
      },
      "eyebrowLeftInner": {
        "x": 142.4,
        "y": 137.7
      },
      "eyeLeftOuter": {
        "x": 132.6,
        "y": 144.7
      },
      "eyeLeftTop": {
        "x": 136.4,
        "y": 142.6
      },
      "eyeLeftBottom": {
        "x": 136.4,
        "y": 146.2
      },
      "eyeLeftInner": {
        "x": 140.4,
        "y": 144.6
      },
      "eyebrowRightInner": {
        "x": 155.3,
        "y": 137.8
      },
      "eyebrowRightOuter": {
        "x": 170.8,
        "y": 140.5
      },
      "eyeRightInner": {
        "x": 156.6,
        "y": 144.9
      },
      "eyeRightTop": {
        "x": 161.2,
        "y": 142.5
      },
      "eyeRightBottom": {
        "x": 161.2,
        "y": 146.4
      },
      "eyeRightOuter": {
        "x": 165.4,
        "y": 145.2
      },
      "noseRootLeft": {
        "x": 144.7,
        "y": 145.0
      },
      "noseRootRight": {
        "x": 152.4,
        "y": 144.8
      },
      "noseLeftAlarTop": {
        "x": 143.7,
        "y": 151.6
      },
      "noseRightAlarTop": {
        "x": 153.3,
        "y": 152.0
      },
      "noseLeftAlarOutTip": {
        "x": 140.7,
        "y": 155.9
      },
      "noseRightAlarOutTip": {
        "x": 155.6,
        "y": 156.5
      },
      "upperLipTop": {
        "x": 147.9,
        "y": 163.9
      },
      "upperLipBottom": {
        "x": 147.6,
        "y": 166.0
      },
      "underLipTop": {
        "x": 147.3,
        "y": 168.6
      },
      "underLipBottom": {
        "x": 147.1,
        "y": 171.9
      }
    }
  }
];

