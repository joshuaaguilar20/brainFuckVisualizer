import React from 'react';




export const Script = ({ script }) => {
    //renders table of memory and index
    return (
        <table class="ui very basic collapsing celled table">
            <tbody>
                <tr>
                    <td>Script</td>
                    {script.script.map((item, index) => {
                        return (index == script.instruction_pointer) ?
                            <td className="positive" key={index}>{item}</td>
                            : <td key={index}>{item}</td>
                    })}
                </tr>
            </tbody>
        </table>
    )
}
