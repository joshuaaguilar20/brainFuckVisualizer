
import {
  SEND_BFSCRIPT,
  PREVIOUS_STATE,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SEND_BFSCRIPT:
      return { ...state, ...action.payload };
    case PREVIOUS_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
