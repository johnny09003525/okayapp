import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, View, Text, Image} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';

import {colors} from './configs';
import * as routeNames from './configs/routeNames';
import NavigationService from './helper/NavigationService';

import store from './redux/store';
import {loadFavouriteList} from './redux/list';
import transition from './helper/TransitionHelper';

import HomeScreen from './screens/HomeScreen';
import GeneralBar from './components/GeneralBar';
import FavouriteScreen from './screens/FavouriteScreen/index';

const navigatorBar = {
  headerBackTitle: null,
  headerTitle: <GeneralBar />,
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
  },
  headerTitleContainerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
};

const defaultTabBar = (title, navigation) => {
  const lastIndex = navigation.state.routes.length - 1;
  const item = navigation.state.routes[lastIndex];

  let tabBarVisible = true;

  if (
    item.params &&
    (item.params.tabBarVisible !== null ||
      item.params.tabBarVisible !== undefined)
  ) {
    tabBarVisible = item.params.tabBarVisible;
  }

  return {
    tabBarIcon: ({focused}) => {
      return FooterIcon(navigation, focused);
    },
    tabBarLabel: title,
    tabBarVisible: tabBarVisible,
  };
};

const FooterIcon = (navigation, focused) => {
  const {routes, routeName} = navigation.state;
  const item = navigation.state.routes[0];

  if (routeName.includes(routeNames.HOME_STACK)) {
    return (
      <Icon
        name={'ios-planet'}
        size={30}
        color={focused ? colors.green : colors.darkGrey}
      />
    );
  } else if (routeName.includes(routeNames.FAVOURITE_STACK)) {
    let badgeNumber = 0;

    if (item.params) {
      if (item.params.badgeNumber) {
        badgeNumber = item.params.badgeNumber;
      }
    }

    return (
      <View>
        {badgeNumber > 0 ? (
          <IconBadge
            MainElement={
              <Icon
                name={'ios-star'}
                size={30}
                color={focused ? colors.green : colors.darkGrey}
              />
            }
            BadgeElement={
              <Text style={{color: '#FFFFFF'}}>
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
              backgroundColor: '#FF0000',
            }}
            Hidden={false}
          />
        ) : (
          <Icon
            name={'ios-star'}
            size={30}
            color={focused ? colors.green : colors.darkGrey}
          />
        )}
      </View>
    );
  }

  return null;
};

// navigators
const HomeStackNavigator = createStackNavigator(
  {
    [routeNames.HOME_STACK_HOME]: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      ...navigatorBar,
    },
    transitionConfig: transition.TransitionConfiguration,
    navigationOptions: ({navigation}) => {
      return defaultTabBar('Home', navigation);
    },
  },
);

const FavouriteStackNavigator = createStackNavigator(
  {
    [routeNames.FAVOURITE_STACK]: FavouriteScreen,
  },
  {
    defaultNavigationOptions: ({screenProps, navigation}) => ({
      ...navigatorBar,
    }),
    transitionConfig: transition.TransitionConfiguration,
    navigationOptions: ({navigation}) => {
      return defaultTabBar('Favourite', navigation);
    },
  },
);

const MainTabNavigator = createBottomTabNavigator(
  {
    [routeNames.HOME_STACK]: HomeStackNavigator,
    [routeNames.FAVOURITE_STACK]: FavouriteStackNavigator,
  },
  {
    lazy: false,
    tabBarOptions: {
      activeTintColor: colors.green,
      inactiveTintColor: colors.darkGrey,
      allowFontScaling: false,
    },
  },
);

const AppStackNavigator = createStackNavigator(
  {
    [routeNames.APP_STACK_MAINTAB]: MainTabNavigator,
  },
  {
    mode: 'modal',
    headerMode: 'none',
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
    this.props.loadFavouriteList();
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

AppScreen.propTypes = {loadFavouriteList: PropTypes.func};

// const mapDispatchToProps = dispatch => {
//   return { logoutUser: () => dispatch(logoutUser) };
// };

const ConnectedAppScreen = connect(mapStateToProps, {loadFavouriteList})(
  AppScreen,
);

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
