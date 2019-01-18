import React from 'react';
import "react-table/react-table.css";
import _ from 'lodash';



const style = {
    background: "#FFFF00",
    fontSize: "20px"
}
const notCurrentScript = {
    fontSize: "20px"
}



export const Script = ({ script }) => {
    return (
        <div id='script' className="ui container">
            <p>
                {script.script.map((item, index) => {
                    return (index + 1 == script.instruction_pointer) ?
                        <span style={style} key={index}>{item}</span>
                        : <span style={notCurrentScript} key={index}>{item}</span>
                })}
            </p>
        </div >
    )
};


