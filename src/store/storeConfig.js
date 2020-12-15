import { createStore, combineReducers } from 'redux';
import stepReducer from './reducers/stepsReducers';
import formUserReducer from './reducers/formUserReducers';

const reducers = combineReducers({
  step: stepReducer,
  formUser: formUserReducer,
});
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function storeConfig() {
  return createStore(reducers, devTools);
}

export default storeConfig;
