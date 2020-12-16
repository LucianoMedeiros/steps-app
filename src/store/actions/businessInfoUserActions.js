//Action Creator
import { ADD_BUSINESS_INFO } from './actionTypes';
export function changeBusinessInfo(businessInfo) {
  return {
    type: ADD_BUSINESS_INFO,
    payload: businessInfo,
  };
}
