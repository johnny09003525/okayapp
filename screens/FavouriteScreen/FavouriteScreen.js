import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import {updateFavouriteList} from '../../redux/list';
import GeneralBar from '../../components/GeneralBar';
import FlatItemList from '../../components/FlatItemList';

const mapStateToProps = state => {
  return {favouriteList: state.listState.favouriteList};
};

class FavouriteScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    // console.log(navigation);

    let titleBar = 'Favourite';

    let json = {
      headerTitle: <GeneralBar customTitle={titleBar} />,
      gesturesEnabled: false,
    };

    return json;
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.favouriteList.length !== this.props.favouriteList.length) {
      this.props.navigation.setParams({
        badgeNumber: this.props.favouriteList.length,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatItemList
          data={this.props.favouriteList}
          favouriteList={this.props.favouriteList}
          updateFavouriteList={item => {
            this.props.updateFavouriteList(item);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

FavouriteScreen.propTypes = {
  favouriteList: PropTypes.array,
  updateFavouriteList: PropTypes.func,
};

export default connect(mapStateToProps, {updateFavouriteList})(FavouriteScreen);
