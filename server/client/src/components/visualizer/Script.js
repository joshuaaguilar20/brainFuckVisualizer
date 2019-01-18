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
// style = {{ overflow: "scroll", width: "500px" }}


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


// return (
//     <div id='container' style={{ overflow: "scroll", width: "1000px" }}>
//         <table>
//             <tbody>
//                 <tr>

//                     {script.script.map((item, index) => {
//                         return (index == script.instruction_pointer) ?
//                             <td className="negative" key={index}>{item}</td>
//                             : <td key={index}>{item}</td>
//                     })}
//                 </tr>
//             </tbody>
//         </table>
//     </div >
// )
// }
