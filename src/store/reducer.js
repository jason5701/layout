import { combineReducers } from 'redux';

// reducer import
import customiztionReducer from './customizationReducer';

const reducer = combineReducers({
  customization: customiztionReducer,
});

export default reducer;
