import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {colors} from './configs';
import * as routeNames from './configs/routeNames';
import NavigationService from './helper/NavigationService';

import store from './redux/store';
// import {loadFavouriteList} from './redux/list';

import HomeScreen from './screens/HomeScreen';
import FavouriteScreen from './screens/FavouriteScreen/index';

// navigators
const AppStackNavigator = createStackNavigator(
  {
    [routeNames.HOME_STACK]: HomeScreen,
    // [routeNames.FAVOURITE_STACK]: FavouriteScreen,
  },
  {
    mode: 'modal',
  },
);

const mapStateToProps = state => {
  return {};
};

class AppScreen extends Component {
  static router = AppStackNavigator.router;

  constructor(props) {
    super(props);
    this._panResponder = {};
  }

  componentDidMount() {
    // this.props.loadFavouriteList();
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={{flex: 1}} {...this._panResponder.panHandlers}>
        <AppStackNavigator
          navigation={this.props.navigation}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

AppScreen.propTypes = {};

// const mapDispatchToProps = dispatch => {
//   return { logoutUser: () => dispatch(logoutUser) };
// };

const ConnectedAppScreen = connect(mapStateToProps, {})(AppScreen);

const RootSwitchNavigator = createSwitchNavigator({
  [routeNames.APP_STACK]: ConnectedAppScreen,
});

const RootSwitchContainer = createAppContainer(RootSwitchNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* In the root component we are rendering the app navigator */
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootSwitchContainer
            ref={navigatorRef => {
              NavigationService.setRootNavigator(navigatorRef);
            }}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
