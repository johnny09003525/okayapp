import {NavigationActions, StackActions} from 'react-navigation';

let rootNavigator;

function setRootNavigator(navigatorRef) {
  rootNavigator = navigatorRef;
}

function navigate(routeName, params) {
  rootNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function push(routeName, params) {
  rootNavigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  push,
  setRootNavigator,
};
