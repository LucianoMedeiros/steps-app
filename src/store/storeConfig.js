import { createStore, combineReducers } from 'redux';
import stepReducer from './reducers/stepsReducers';
import cnpjUserReducer from './reducers/cnpjUserReducers';
import businessInfoUserReducer from './reducers/businessInfoUserReducers'
import businessAddressReducer from './reducers/businessAddressReducers'

const reducers = combineReducers({
  step: stepReducer,
  corpID: cnpjUserReducer,
  corpBasicInfo: businessInfoUserReducer,
  corpAddressInfo: businessAddressReducer,
});
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function storeConfig() {
  return createStore(reducers, devTools);
}

export default storeConfig;
