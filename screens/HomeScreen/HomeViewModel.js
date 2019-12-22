import {
  GET_LIST_API_URL,
  makeBackendApiGetCall,
} from '../../helper/APICallHelper';

export async function getListFunction(successfulBlock, failureBlock) {
  try {
    const url = GET_LIST_API_URL();
    console.log(url);
    const response = await makeBackendApiGetCall(url);
    if (
      response &&
      response.data &&
      !response.data.error &&
      !response.data.errorMessage
    ) {
      // console.log(response.data);
      const listArray = response.data;

      successfulBlock(listArray);
    } else {
      console.log('error');
      throw 'error';
    }
  } catch (error) {
    console.log(error);
    failureBlock(error);
  }
}
