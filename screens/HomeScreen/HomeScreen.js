import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import GeneralBar from '../../components/GeneralBar';
import {getListFunction} from './HomeViewModel';

import {updateFavouriteList} from '../../redux/list';
import FlatItemList from '../../components/FlatItemList';
import {getMenuBtn} from '../../components/NavigatorItem';
import NavigationService from '../../helper/NavigationService';
import * as routeNames from '../../configs/routeNames';

const mapStateToProps = state => {
  return {
    favouriteList: state.listState.favouriteList,
  };
};

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    // console.log(navigation);
    const {params} = navigation.state;

    let badgeNumber = 0;
    if (params) {
      badgeNumber = params.badgeNumber ? params.badgeNumber : 0;
    }

    const menuBtn = getMenuBtn({paddingRight: 20}, badgeNumber, () => {
      if (params) {
        params.onMenuBtnClicked();
      }
    });

    let titleBar = 'Home';

    let json = {
      headerTitle: <GeneralBar customTitle={titleBar} />,
      gesturesEnabled: false,
      headerRight: menuBtn,
    };

    return json;
  };

  constructor(props) {
    super(props);
    this.state = {listArray: []};
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.favouriteList.length !== this.props.favouriteList.length) {
      this.props.navigation.setParams({
        badgeNumber: this.props.favouriteList.length,
      });
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      badgeNumber: 0,
      onMenuBtnClicked: this._onMenuBtnClicked,
    });

    getListFunction(
      listArray => {
        // console.log(listArray);
        this.setState({listArray});
      },
      error => {
        console.log(error);
      },
    );
  }

  _onMenuBtnClicked = () => {
    NavigationService.navigate(routeNames.FAVOURITE_STACK);
  };

  render() {
    const {listArray} = this.state;
    return (
      <View style={styles.container}>
        <FlatItemList
          data={listArray}
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

HomeScreen.propTypes = {
  favouriteList: PropTypes.array,
  updateFavouriteList: PropTypes.func,
};

export default connect(mapStateToProps, {updateFavouriteList})(HomeScreen);
