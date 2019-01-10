import React from 'react';
import { Field, reduxForm } from 'redux-form';

class FormLogic extends React.Component {
  //Renders error if user selects input and does not enter text to submit
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  //renders in the input label, meta are props from redux form Field* . 
  //docs- https://redux-form.com/7.1.2/docs/api/field.md/
  renderInput = ({ input, label, meta }) => {
    //data if user has touched input box or not. 
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  //onsubmit function passed to handleSubmit
  onSubmit = formValues => {
    console.log(this.props.onSubmit)
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="script" component={this.renderInput} label="Enter BrainFuck Code" />
        <button className="ui button primary">Start Visualizer</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter code to submit';
  }

  return errors;
};

export default reduxForm({
  form: 'formLogic',
  validate
})(FormLogic);
