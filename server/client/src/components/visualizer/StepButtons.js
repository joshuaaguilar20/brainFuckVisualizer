import React from 'react';
import { connect } from 'react-redux';
import { nextStep, savePrevState, finalStep } from "../../actions"
import _ from 'lodash';

export class StepButtons extends React.Component {
    constructor(props) {
        super(props)
        this.prevStateArray = [];
        this.prevStepFlag = false;
    };

    componentDidUpdate(prevProps) {
        let prevState = {};
        const uniqify = (array, key) => array.reduce((prev, curr) => prev.find(a => a[key] === curr[key]) ? prev : prev.push(curr) && prev, []);
        if (!this.prevStepFlag) {
            if (prevProps && this.props.script.instruction_pointer > 0) {
                prevState = prevProps.script
                prevState.data = _.compact(prevState.data);
                this.prevStateArray.push(prevState);
                return uniqify(this.prevStateArray, 'instruction_pointer');
            }
        }
    }


    nextStepFunction = (steps) => {
        const { nextStep, script, savePrevState } = this.props

        //adds user specifed script count
        //only calls API if we do not have state in array
        if (
            this.prevStateArray.length - 1 > script.instruction_pointer && this.prevStepFlag) {
            const prevStep = this.prevStateArray[script.instruction_pointer + 1]
            console.log("length below");
            console.log(this.prevStateArray)
            console.log('Pointer')
            console.log(script.instruction_pointer)
            savePrevState(prevStep)

        } else {
            this.prevStepFlag = false;
            script['count'] = steps
            nextStep(script)
        }
    };
    finalStepFunction = async () => {
        //Steps to the end of the script
        const { finalStep, script } = this.props
        finalStep(script);
    }


    prevStateFunction = () => {
        //grabs previous state from array and updates it to current
        this.prevStepFlag = true;
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
    { nextStep, savePrevState, finalStep }
)(StepButtons);











