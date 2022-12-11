import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// ios / android
const guidelineBaseWidth = Platform.OS === 'android' ? 375 : 414;
const guidelineBaseHeight = Platform.OS === 'android' ? 812 : 896;

// width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight, paddingHorizontal
const horizontalScale = size => (width / guidelineBaseWidth) * size;
// height, marginTop, marginBottom, marginVertical, line-height, paddingTop, paddingBottom, paddingVertical
const verticalScale = size => (height / guidelineBaseHeight) * size;
// font-size, borderRadius
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale, width, height};
