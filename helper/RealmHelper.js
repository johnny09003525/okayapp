import Realm from 'realm';
import {ListSchema} from '../database/schema/listSchema';
import environment from '../configs/environments';

const encryptionKey = environment.isProd() ? new Int8Array(64) : undefined; // pupulate with a secure key

const databaseOptions = {
  path: 'okayapp.realm',
  schema: [ListSchema],
  schemaVersion: 1, // optional
  encryptionKey,
};
const realm = new Realm(databaseOptions);

export default realm;
