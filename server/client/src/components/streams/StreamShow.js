import React from 'react';
import { connect } from 'react-redux';
import { nextStep, savePrevState } from "../../actions"


class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.prevState = {}
  };

  componentDidUpdate(prevProps) {
    if (prevProps) {
      this.prevState = { ...prevProps };
      this.prevState['historyPresent'] = true;
    }
  };





  renderLists() {
    if (!this.props.script) {
      return <div>Loading...</div>;
    }
    return (
      <div className="content">
        script {this.props.script.script}
        data  {this.props.script.instruction_pointer}
        <button onClick={() => this.nextStepFunction(1)}>Step 1 </button>
        <button onClick={() => this.nextStepFunction(5)}>Step 5 </button>
        {this.prevState.historyPresent ? <button onClick={() => console.log(this.props.prevState)}>Step Back</button> :

          null
        }
      </div>
    );
  };

  nextStepFunction = (steps) => {
    this.props.script['count'] = steps
    this.props.nextStep(this.props.script)
  }

  prevStateFunction = () => {

  }

  render() {
    return (
      <div>
        <h2>Visualizer</h2>
        <div className="ui celled list">{this.renderLists()}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    script: state.script,
    prevState: state.prevState
  };
};

export default connect(
  mapStateToProps,
  { nextStep, savePrevState }
)(StreamShow);
