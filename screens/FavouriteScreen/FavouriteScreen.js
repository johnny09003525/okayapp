import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import {updateFavouriteList} from '../../redux/list';
import GeneralBar from '../../components/GeneralBar';
import FlatItemList from '../../components/FlatItemList';
import {getCloseBtn} from '../../components/NavigatorItem';

const mapStateToProps = state => {
  return {favouriteList: state.listState.favouriteList};
};

class FavouriteScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    // console.log(navigation);

    let titleBar = 'Favourite';

    const {params} = navigation.state;

    const closeBtn = getCloseBtn({paddingRight: 20}, 0, () => {
      if (params) {
        params.onCloseBtnClicked();
      }
    });

    let json = {
      headerTitle: <GeneralBar customTitle={titleBar} />,
      gesturesEnabled: false,
      headerRight: closeBtn,
      headerLeft: null,
    };

    return json;
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onCloseBtnClicked: this._onCloseBtnClicked,
    });
  }

  _onCloseBtnClicked = () => {
    this.props.navigation.goBack(null);
  };

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
