import {Platform} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from '../helper/iPhoneXHelper';

const safeMarginTop = Platform.select({
  ios: getStatusBarHeight(true),
  android: 0,
});

const safeMarginBottom = getBottomSpace();

const statusBarHeight = getStatusBarHeight(true);

const layout = {safeMarginTop, safeMarginBottom, statusBarHeight};

export default layout;
