import realm from '../helper/RealmHelper';
import {LIST_SCHEMA} from './schema/listSchema';

export function loadFavouriteListFromDB() {
  const existFavourite = realm.objects(LIST_SCHEMA);
  let objectArray = [];
  if (existFavourite && existFavourite.length > 0) {
    existFavourite.forEach(r => {
      objectArray.push({...r});
    });
  }

  return objectArray;
}
export function insertFavourite(favouriteObject) {
  const existFavourite = realm
    .objects(LIST_SCHEMA)
    .filtered(`id = "${favouriteObject.id}"`);

  if (!existFavourite || existFavourite.length === 0) {
    try {
      realm.write(() => {
        realm.create(LIST_SCHEMA, favouriteObject);
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('already added ');
  }
}

export function deleteFavourite(favouriteObject) {
  const existFavourite = realm
    .objects(LIST_SCHEMA)
    .filtered(`id = "${favouriteObject.id}"`);

  if (existFavourite && existFavourite.length > 0) {
    try {
      realm.write(() => {
        realm.delete(existFavourite);
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('already added ');
  }
}
