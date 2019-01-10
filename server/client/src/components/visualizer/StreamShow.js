import React from 'react';
import { connect } from 'react-redux';
import { nextStep, savePrevState } from "../../actions"
import { Memory } from './Memory';
import { Script } from './Script';
import StepButtons from './StepButtons';
import { Link } from 'react-router-dom';



class StreamShow extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLists(script) {
    if (!script.script) {
      return (<div>
        <h3>Must have vaild input to visualize </h3>
        <Link to="/" className="item">
          Back to Brainfuck Interpreter
           </Link>
      </div>)
    }
    return (
      <div className="content">
        <Script script={script} />
        <h4> Step Number {script.instruction_pointer}</h4>
        <Memory script={script} />
        <h4 className="positive">Output {script.output}</h4>
        <StepButtons />
      </div>
    );
  };

  render() {
    const { script } = this.props
    return (
      <div>
        <h2>Visualizer</h2>
        <div className="ui table">{this.renderLists(script)}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    script: state.script
  };
};

export default connect(
  mapStateToProps,
  { nextStep, savePrevState }
)(StreamShow);
