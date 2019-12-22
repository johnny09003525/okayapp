import {Dimensions} from 'react-native';

const getWidth = () =>
  Math.min(Dimensions.get('window').height, Dimensions.get('window').width);
const getHeight = () =>
  Math.max(Dimensions.get('window').height, Dimensions.get('window').width);

// Guideline sizes are based on iPhone 8
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const scale = size => (getWidth() / guidelineBaseWidth) * size;
const verticalScale = size => (getHeight() / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// const ScreenHelper = { scale, verticalScale, moderateScale };

export {scale, verticalScale, moderateScale, getWidth, getHeight};
