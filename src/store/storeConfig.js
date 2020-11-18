import { createStore, combineReducers } from "redux";
import stepReducer from "./reducers/stepsReducers";

const reducers = combineReducers({
  step: stepReducer,
  signUpFields: function (state, action) {
    return {
      name: null,
      email: null,
      zipCode: null,
      addressNumber: null,
      avatar: null,
    };
  },
});
function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
