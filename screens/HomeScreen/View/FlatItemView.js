import React, {forwardRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import commonStyles from '../../../styles';
import {scale, getWidth} from '../../../helper/ScreenHelper';
import {colors} from '../../../configs';
import {priceTransform} from '../../../helper/UtilHelper';

const FlatItemView = forwardRef((props, ref) => {
  const {
    districtName,
    streetName,
    buildingName,
    salePrice,
    grossSize,
    bedrooms,
    bathrooms,
    propertyPhoto,
  } = props.item;

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <FastImage
          style={styles.imageStyle}
          source={{
            uri: propertyPhoto,
            priority: FastImage.priority.NORMALSIGNIN,
          }}
          resizeMode={FastImage.resizeMode.cover}
          onLoad={e => {
            // console.log(e.nativeEvent);
          }}
        />
        <TouchableOpacity
          style={styles.likeContainer}
          onPress={() => {
            props.onFavouriteClicked();
          }}>
          <Icon
            name={props.isFavourited ? 'ios-heart' : 'ios-heart-empty'}
            size={25}
            color={props.isFavourited ? colors.red : colors.white}
          />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <LinearGradient
            locations={[0, 0.2, 1.0]}
            colors={['rgba(0,0,0, 0)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 1)']}
            style={[
              {flex: 1, paddingBottom: 0, paddingLeft: 12, paddingRight: 12},
            ]}>
            <View style={{marginBottom: 5, flexDirection: 'row'}}>
              <Text style={styles.boldTitleStyle}>
                {priceTransform(salePrice)}
              </Text>
            </View>
            <View style={{marginBottom: 5, flexDirection: 'row'}}>
              <Text style={styles.textStyle}>{districtName}</Text>
              <Text style={styles.textStyle}> | </Text>
              <Text style={styles.boldTextStyle}>{buildingName}</Text>
            </View>
            <View style={{marginBottom: 15, flexDirection: 'row'}}>
              <Text style={styles.boldTextStyle}>{grossSize}</Text>
              <Text style={styles.textStyle}> sq. ft.(S.A)</Text>
              <Text style={styles.textStyle}> | </Text>
              <Text style={styles.boldTextStyle}>{bedrooms}</Text>
              <Text style={styles.textStyle}> Beds</Text>
              <Text style={styles.textStyle}> | </Text>
              <Text style={styles.boldTextStyle}>{bathrooms}</Text>
              <Text style={styles.textStyle}> Baths</Text>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.underlying} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignContent: 'center',
  },
  imageStyle: {
    width: getWidth(),
    height: getWidth() * 0.67,
  },
  likeContainer: {
    flex: 1,
    position: 'absolute',
    width: 50,
    height: 50,
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.yellow,
  },
  contentContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    width: '100%',
    bottom: 0,
    // backgroundColor: colors.yellow,
  },
  boldTitleStyle: {
    ...commonStyles.text.bold,
    fontSize: scale(18),
    color: colors.white,
  },
  boldTextStyle: {
    ...commonStyles.text.bold,
    fontSize: scale(15),
    color: colors.white,
  },
  textStyle: {
    ...commonStyles.text.regular,
    fontSize: scale(15),
    color: colors.white,
  },

  underlying: {
    marginLeft: scale(20),
    marginRight: scale(20),
    backgroundColor: colors.black,
    height: 0.5,
  },
});

export default FlatItemView;
