import { ADD_LOGO_INFO } from '../actions/actionTypes';

const initialState = {
  fields: {
    logo: null,
  },
};

export default function formUserReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_LOGO_INFO:
      return { ...state, fields: action.payload };
    default:
      return state;
  }
}
