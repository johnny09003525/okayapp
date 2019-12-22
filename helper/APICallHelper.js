import axios from 'axios';
import environments from '../configs/environments';
import store from '../redux/store';

import {NativeModules, Platform} from 'react-native';

const {appVersion} = NativeModules.AppSettings;

export const GET_LIST_API_URL = () => '/roycwc/jsonserver/properties';

const groundServerClient = axios.create();

groundServerClient.interceptors.request.use(
  config => {
    config.headers['app-version'] = appVersion;

    return config;
  },
  error => Promise.reject(error),
);

/**
 * common function to call GET api
 * @param {*} url
 * @param { cannot get token from the store right after login, so need to pass this param} accessToken
 */
export const makeBackendApiGetCall = (url, accessToken) => {
  console.log(
    'makeBackendApiGetCall url',
    `${environments.groundServerUrl}${url}`,
  );

  const finalUrl = `${environments.groundServerUrl}${url}`;

  let JSON = {
    method: 'get',
    url: finalUrl,
    responseType: 'json',
    timeout: 30000,
  };

  if (accessToken) {
    JSON = {...JSON, headers: {Authorization: `Bearer ${accessToken}`}};
  }

  return groundServerClient(JSON);
};

/**
 * common function to call POST api
 * @param {*} url
 * @param {*} body
 */
export const makeBackendApiPostCall = (url, body, accessToken, cancelToken) => {
  const finalUrl = `${environments.groundServerUrl}${url}`;

  const cancelAxios = axios.CancelToken;

  let JSON = {
    method: 'post',
    url: finalUrl,
    responseType: 'json',
    timeout: 30000,
    data: body,
  };

  if (body) {
    JSON = {...JSON, body};
  }

  if (accessToken) {
    JSON = {...JSON, headers: {Authorization: `Bearer ${accessToken}`}};
  }

  if (cancelToken) {
    JSON = {
      ...JSON,
      cancelToken: new cancelAxios(function executor(c) {
        cancelToken(c);
      }),
    };
  }

  return groundServerClient(JSON);
};
