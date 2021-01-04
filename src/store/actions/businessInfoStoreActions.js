//Action Creator
import { ADD_BUSINESS_STORE_INFO } from './actionTypes';
export function changeBusinessStoreInfo(businessStoreInfo) {
  return {
    type: ADD_BUSINESS_STORE_INFO,
    payload: businessStoreInfo,
  };
}
