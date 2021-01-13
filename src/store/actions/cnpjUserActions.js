//Action Creator
import { ADD_CNPJ_INFO } from './actionTypes';
export function changeCnpjUserInfo(cnpjUser) {
  return {
    type: ADD_CNPJ_INFO,
    payload: cnpjUser,
  };
}
