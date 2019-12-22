import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../configs';
import {scale} from '../helper/ScreenHelper';
import commonStyles from '../styles';

export const ListItemSeparatorCrewList = () => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <View
        style={{
          backgroundColor: colors.lineGrey,
          height: 0.5,
          marginLeft: scale(16),
        }}
      />
    </View>
  );
};

export const ListItemSeparator = () => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <View
        style={{
          backgroundColor: colors.lineGrey,
          height: 0.5,
          marginLeft: scale(16),
        }}
      />
    </View>
  );
};

export const ListItemSeparatorWithoutSpace = () => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <View style={{backgroundColor: colors.lineGrey, height: 0.5}} />
    </View>
  );
};

export const ListItemSeparatorWithBothSpaces = () => {
  return (
    <View
      style={{
        marginLeft: scale(16),
        marginRight: scale(16),
        height: scale(0.5),
        backgroundColor: colors.lineGrey,
      }}
    />
  );
};

export function ListHeaderSeparator(height) {
  return <View style={{flex: 1, width: '100%', height}} />;
}

export function ListHeaderWithTitleSeparator(title) {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        // alignContent: 'flex-end',
      }}>
      <Text
        style={{
          ...commonStyles.text.regular,
          marginLeft: scale(15),
          marginTop: scale(30),
          marginRight: scale(2),
          marginBottom: scale(5),
          fontSize: scale(15),
          // alignSelf: 'center',
        }}>
        {title}
      </Text>
    </View>
  );
}
