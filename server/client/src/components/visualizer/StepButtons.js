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
        //saving state NEW changes and compacting array to free memory.
        //Logic below removes duplicates in array of objects and compacts data
        let prevState = {};
        if (prevProps && this.props.script.instruction_pointer > 0) {
            prevState = prevProps.script
            prevState.data = _.compact(prevState.data);
            this.prevStateArray.push(prevState);
            //removes any duplicate values in arr
            this.prevStateArray = this.prevStateArray.reduce((unique, o) => {
                if (!unique.some(obj => obj.instruction_pointer === o.instruction_pointer && obj.value === o.value)) {
                    unique.push(o);
                }
                return unique;
            }, []);
        }
    }
    //adds user specifed script count
    //only calls API if we do not have state in array
    nextStepFunction = (steps) => {
        const { nextStep, script, savePrevState } = this.props
        if (this.prevStateArray.length - 1 <= script.instruction_pointer) {
            this.prevStepFlag = false;
            script['count'] = steps
            nextStep(script)
        } else {
            const prevStep = this.prevStateArray[script.instruction_pointer + 1]
            savePrevState(prevStep)
        }

    };
    finalStepFunction = async () => {
        //Steps to the end of the script if script is not finished* 
        this.prevStepFlag = false;
        const { finalStep, script, savePrevState } = this.props
        if (!script.done) {
            finalStep(script);
        }
    };
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











