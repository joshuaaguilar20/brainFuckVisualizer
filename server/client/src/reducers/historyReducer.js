
import {
  PREVIOUS_STATE
} from '../actions/types';



export default (state = [], action) => {
  switch (action.type) {
    case PREVIOUS_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};