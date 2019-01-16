
import {
  SEND_BFSCRIPT,
  PREVIOUS_STATE,
  TEST_ACTION
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SEND_BFSCRIPT:
      return { ...state, ...action.payload };
    case PREVIOUS_STATE:
      return { ...state, ...action.payload };
    case TEST_ACTION:
      return {
        ...state["testItem"] = action.payload.script.map((data) => {
          return data[0];
        })
      };
    default:
      return state;
  }
};
