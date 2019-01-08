import _ from 'lodash';
import {
  SEND_BFSCRIPT,

} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SEND_BFSCRIPT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
