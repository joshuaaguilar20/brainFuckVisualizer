import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  form: formReducer,
  script: streamReducer,
  prevState: historyReducer
});
