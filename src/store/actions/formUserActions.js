//Action Creator
import { ADD_USER_INFO } from './actionTypes';
export function changeUserInfo(formUser) {
  return {
    type: ADD_USER_INFO,
    payload: formUser,
  };
}
