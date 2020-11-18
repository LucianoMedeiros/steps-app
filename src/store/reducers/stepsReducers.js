import { NEW_STEP } from "../actions/actionTypes";

const initialState = {
  current: 1,
};

export default function stepsReducers(state = initialState, action) {
  switch (action.type) {
    case NEW_STEP:
      return { ...state, current: action.payload };
    default:
      return state;
  }
}
