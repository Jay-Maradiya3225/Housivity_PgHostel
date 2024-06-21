import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = val => widthPercentageToDP(val);
export const hp = val => heightPercentageToDP(val);
