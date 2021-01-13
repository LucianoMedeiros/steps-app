import { createStore, combineReducers } from 'redux';
import stepReducer from './reducers/stepsReducers';
import cnpjUserReducer from './reducers/cnpjUserReducers';
import businessInfoUserReducer from './reducers/businessInfoUserReducers'
import businessInfoStoreReducer from './reducers/businessInfoStoreReducers'
import businessAddressReducer from './reducers/businessAddressReducers'
import businessLogoStoreReducer from './reducers/businessLogoStoreReducers'

const reducers = combineReducers({
  step: stepReducer,
  corpID: cnpjUserReducer,
  corpBasicInfo: businessInfoUserReducer,
  corpAddressInfo: businessAddressReducer,
  corpStoreInfo: businessInfoStoreReducer,
  corpLogoInfo: businessLogoStoreReducer,
});
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function storeConfig() {
  return createStore(reducers, devTools);
}

export default storeConfig;
