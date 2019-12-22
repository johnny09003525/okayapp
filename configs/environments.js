import {NativeModules} from 'react-native';

const {serverEnvironment} = NativeModules.AppSettings;

const DEVELOPMENT_ENVIRONMENT = 'devEnv';
const UAT_ENVIRONMENT = 'uatEnv';
const PRODUCTION_ENVIRONMENT = 'prodEnv';

let env = DEVELOPMENT_ENVIRONMENT;

let groundServerUrl = 'https://my-json-server.typicode.com';

switch (serverEnvironment) {
  case '.uat':
    env = UAT_ENVIRONMENT;
    console.log('Using uat env');
    break;
  case '.prod':
    env = PRODUCTION_ENVIRONMENT;
    console.log('Using prod env');
    break;
  default:
    break;
}

const isDev = () => env === DEVELOPMENT_ENVIRONMENT;
const isUat = () => env === UAT_ENVIRONMENT;
const isProd = () => env === PRODUCTION_ENVIRONMENT;

const environments = {
  env,
  isDev,
  isUat,
  isProd,
  groundServerUrl,
};

export default environments;
