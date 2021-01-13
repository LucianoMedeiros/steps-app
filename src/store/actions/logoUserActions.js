//Action Creator
import { ADD_LOGO_INFO } from './actionTypes';
export function changelogoUserInfo(logoUser) {
  return {
    type: ADD_LOGO_INFO,
    payload: logoUser,
  };
}
