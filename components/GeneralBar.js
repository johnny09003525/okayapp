import PropTypes from 'prop-types';
import React from 'react';
import {colors} from '../configs';
import commonStyles from '../styles';
import {StyleSheet, View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import {scale} from '../helper/ScreenHelper';
import {connect} from 'react-redux';

const GeneralBar = props => {
  return (
    <View style={styles.background}>
      <View style={styles.titleViewStyle}>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
          {props.customTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  titleViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(300),
  },
  titleText: {
    ...commonStyles.text.regular,
    color: colors.black,
    fontSize: 17,
  },
});

GeneralBar.propTypes = {
  customTitle: PropTypes.string,
};

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default connect()(withNavigation(GeneralBar));
