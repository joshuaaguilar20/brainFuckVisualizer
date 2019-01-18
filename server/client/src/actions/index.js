import baseUrl from '../apis/baseUrl';
import history from '../history';

import {
  SEND_BFSCRIPT,
  PREVIOUS_STATE,
} from './types';


export const sendScript = formValues => async dispatch => {
  const response = await baseUrl.post('/brainfuck', { ...formValues });
  dispatch({ type: SEND_BFSCRIPT, payload: response.data });
  history.push("/visualize");
};


export const nextStep = scriptData => async dispatch => {
  const response = await baseUrl.post(`/brainfuck/${scriptData.id}/step`, { ...scriptData });
  dispatch({ type: SEND_BFSCRIPT, payload: response.data })
};

export const savePrevState = prevState => async dispatch => {
  dispatch({ type: PREVIOUS_STATE, payload: prevState });
};

export const finalStep = scriptData => async dispatch => {
  const response = await baseUrl.post(`/brainfuck/${scriptData.id}/step`, { ...scriptData });
  if (!scriptData.done) {
    dispatch({ type: SEND_BFSCRIPT, payload: response.data })
    dispatch(finalStep(response.data))
  }
};








