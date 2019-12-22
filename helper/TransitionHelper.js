// import { Easing, Animated } from 'react-native';

// custom transition
const SlideFromTop = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [-height, 0, 0],
  });
  return {transform: [{translateY}]};
};

const SlideFromBottom = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0],
  });
  return {transform: [{translateY}]};
};

const SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  return {transform: [{translateX}]};
};

const FadeTransition = (index, position) => {
  const transition = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  return {opacity: transition};
};

const CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  return {
    opacity,
    transform: [{scaleY}],
  };
};

const TransitionConfiguration = () => {
  return {
    // transitionSpec: {
    //   duration: 750,
    //   easing: Easing.out(Easing.poly(6)),
    //   timing: Animated.timing,
    //   useNativeDriver: true,
    // },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const width = layout.initWidth;
      const height = layout.initHeight;
      const {index, route} = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';
      return {
        slideFromTop: SlideFromTop(index, position, height),
        slideFromBottom: SlideFromBottom(index, position, height),
        fade: FadeTransition(index, position),
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  };
};

export default {
  TransitionConfiguration,
};
