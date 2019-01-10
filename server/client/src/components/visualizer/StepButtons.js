import React from 'react';
import { connect } from 'react-redux';
import { nextStep, savePrevState } from "../../actions"
import _ from 'lodash';

export class StepButtons extends React.Component {
    constructor(props) {
        super(props)
        this.prevStateArray = [];
    };

    componentDidUpdate(prevProps) {
        //compacts previous state and save to arr. for back function
        let prevState = {};
        if (prevProps && this.props.script.instruction_pointer > 0) {
            prevState = prevProps.script
            prevState.data = _.compact(prevState.data);
            this.prevStateArray.push(prevState)
        }
    }

    nextStepFunction = (steps) => {
        //adds user specifed script count
        const { nextStep, script } = this.props
        script['count'] = steps
        nextStep(script)
    }
    finalStepFunction = () => {
        //Steps to the end of the script
        const { nextStep, script } = this.props
        script.script.forEach(step => {
            nextStep(script)
        });
    };

    prevStateFunction = () => {
        //grabs previous state from array and updates it to current
        const { savePrevState, script } = this.props
        const prevStep = this.prevStateArray[script.instruction_pointer - 1]
        savePrevState(prevStep)
    };

    render() {
        return (
            <div>
                <button className="ui button positive" onClick={() => this.nextStepFunction(1)}>Step 1 </button>
                <button className="ui button" onClick={() => this.nextStepFunction(5)}>Step 5 </button>
                <button className="ui button" onClick={() => this.finalStepFunction()}>Step To End</button>
                {this.props.script.instruction_pointer ?
                    <button className="ui button" onClick={() => this.prevStateFunction()}>Step Back</button>
                    : null}
            </div >
        )
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
)(StepButtons);











