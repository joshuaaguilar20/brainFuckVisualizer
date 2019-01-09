import React from 'react';
import { connect } from 'react-redux';
import { nextStep, savePrevState } from "../../actions"
import _ from 'lodash';
import 'react-virtualized/styles.css'
import { Column, Table } from 'react-virtualized'


class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.prevStateArray = [];
  };

  componentDidUpdate(prevProps) {
    let prevState = {};
    if (prevProps && this.props.script.instruction_pointer > 0) {
      prevState = prevProps.script
      this.prevStateArray.push(prevState)
      console.log(this.prevStateArray);
    }
  };
  nextStepFunction = (steps) => {
    const { nextStep, script } = this.props
    script['count'] = steps
    nextStep(script)
  }

  prevStateFunction = () => {
    const prevStep = this.prevStateArray[this.props.script.instruction_pointer - 1]
    console.log(typeof (prevStep))
    this.props.savePrevState(prevStep)
  };


  renderLists(script) {
    return (
      <div className="content">
        Script <h2>{script.script}</h2>
        Step Number <h2>{script.instruction_pointer}</h2>
        <div className="box">
          <div className="ui table">
            <tr>
              {_.chunk(script.data, 10).map((item, index) => {
                return (index == script.data_pointer) ?
                  <td><b>{item}</b></td>
                  :
                  <td>{item}</td>
              }
              )}
            </tr>
          </div>
        </div>
        OutPut <h2>{script.output}</h2>

        <button className="ui button" onClick={() => this.nextStepFunction(1)}>Step 1 </button>
        <button className="ui button" onClick={() => this.nextStepFunction(5)}>Step 5 </button>
        {script.instruction_pointer ?
          <button className="ui button" onClick={() => this.prevStateFunction()}>Step Back</button>
          : null
        }
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
