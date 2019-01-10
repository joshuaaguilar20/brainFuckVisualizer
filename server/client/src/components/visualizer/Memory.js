import React from 'react';
import _ from 'lodash';



export const Memory = ({ script }) => {
    //renders table of memory and index
    return (
        <table class="ui very basic collapsing celled table">
            <tbody>
                <tr>
                    <td>Memory</td>
                    {_.compact(script.data).map((item, index) => {
                        return (index == script.data_pointer) ?
                            <td className="positive" key={index}>{item}</td>
                            : <td key={index}>{item}</td>
                    })}
                </tr>
                <tr>
                    <td>Index</td>
                    {script.data.map((item, index) => {
                        return (item) ?
                            <td className="negative" key={index}>{index}</td>
                            : null
                    })}
                </tr>
            </tbody>
        </table>
    )
}




