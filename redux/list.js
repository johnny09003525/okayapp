import {
  insertFavourite,
  deleteFavourite,
  loadFavouriteListFromDB,
} from '../database/listFunction';

export const UPDATE_FAVOURITE = 'okayapp/list/UPDATE_FAVOURITE';

const initialState = {
  favouriteList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FAVOURITE: {
      return {
        ...state,
        favouriteList: action.payload.favouriteList,
      };
    }
    default:
      return state;
  }
};

export const loadFavouriteList = () => (dispatch, getState) => {
  const favouriteList = loadFavouriteListFromDB();
  dispatch({type: UPDATE_FAVOURITE, payload: {favouriteList}});
};

export const updateFavouriteList = favouriteObject => (dispatch, getState) => {
  let favouriteList = getState().listState.favouriteList.map(r => r);
  const isExisted = favouriteList.find(rx => rx.id === favouriteObject.id);

  if (isExisted) {
    favouriteList = favouriteList.filter(rxx => rxx.id !== favouriteObject.id);
    deleteFavourite(favouriteObject);
  } else {
    favouriteList.push(favouriteObject);
    insertFavourite(favouriteObject);
  }

  dispatch({type: UPDATE_FAVOURITE, payload: {favouriteList}});
};
