import React from 'react';
import { connect } from 'react-redux';
import { sendScript } from '../../actions';
import FormLogic from './FormLogic';

class RenderInput extends React.Component {
  onSubmit = formValues => {
    this.props.sendScript(formValues);
  };

  render() {
    return (
      <div>
        <h3>BrainFuck Visualizer </h3>
        <FormLogic onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { sendScript }
)(RenderInput);
