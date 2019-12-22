import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../configs';
import IconBadge from 'react-native-icon-badge';

function getNavBtn(style, badgeNumber, iconName, onPress) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {iconName.includes('ios-') ? (
        badgeNumber > 0 ? (
          <IconBadge
            MainElement={
              <Icon name={iconName} size={30} color={colors.darkGrey} />
            }
            BadgeElement={
              <Text style={{color: colors.white}}>
                {badgeNumber ? badgeNumber : 0}
              </Text>
            }
            IconBadgeStyle={{
              position: 'absolute',
              bottom: 15,
              left: 15,
              minWidth: 20,
              height: 20,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.red,
            }}
            Hidden={false}
          />
        ) : (
          <Icon name={iconName} size={30} color={colors.black} />
        )
      ) : (
        <Text>{iconName}</Text>
      )}
    </TouchableOpacity>
  );
}

export function getMenuBtn(style, badgeNumber, onPress) {
  return getNavBtn(style, badgeNumber, 'ios-menu', onPress);
}

export function getCloseBtn(style, badgeNumber, onPress) {
  return getNavBtn(style, badgeNumber, 'ios-close', onPress);
}
