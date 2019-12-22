import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, FlatList} from 'react-native';

import FlatItemView from '../screens/HomeScreen/View/FlatItemView';
import {
  ListItemSeparator,
  ListItemSeparatorWithoutSpace,
} from './ListItemSeparator';

const FlatItemList = props => {
  const {data, favouriteList, updateFavouriteList} = props;

  const _keyExtractor = (item, index) => index.toString();

  const _renderItem = ({item, index}) => {
    const isFavourited = favouriteList.find(r => r.id === item.id);
    return (
      <FlatItemView
        item={item}
        index={index}
        isFavourited={isFavourited}
        onFavouriteClicked={() => {
          updateFavouriteList(item);
        }}
      />
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      ListHeaderComponent={ListItemSeparatorWithoutSpace}
      ItemSeparatorComponent={ListItemSeparator}
      ListFooterComponent={ListItemSeparatorWithoutSpace}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

FlatItemList.propTypes = {
  data: PropTypes.array,
  updateFavouriteList: PropTypes.func,
};

export default FlatItemList;
