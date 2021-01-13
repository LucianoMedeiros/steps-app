//Action Creator
import { ADD_ADDRESS_INFO } from './actionTypes';
export function changeAddressInfo(addressInfo) {
  return {
    type: ADD_ADDRESS_INFO,
    payload: addressInfo,
  };
}
