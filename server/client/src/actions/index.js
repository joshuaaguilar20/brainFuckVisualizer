import streams from '../apis/streams';
import history from '../history';
import {
  SEND_BFSCRIPT,
  PREVIOUS_STATE,
} from './types';


export const createStream = formValues => async dispatch => {
  const response = await streams.post('/brainfuck', { ...formValues });
  dispatch({ type: SEND_BFSCRIPT, payload: response.data });
  history.push("/visualize");
};


export const nextStep = scriptData => async dispatch => {
  const response = await streams.post(`/brainfuck/${scriptData.id}/step`, { ...scriptData });
  console.log(response.data);
  dispatch({ type: SEND_BFSCRIPT, payload: response.data });

};

export const savePrevState = prevState => async dispatch => {
  console.log(prevState.script)
  dispatch({ type: SEND_BFSCRIPT, payload: prevState.script });
};

