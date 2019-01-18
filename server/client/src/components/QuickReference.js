import React from 'react';

const QuickReference = () => {
    return (
        <div>
            <div style={{ margin: "10px" }}><h3>Quick Reference</h3></div>
            <table style={{ margin: "5px" }}>
                <tbody>
                    <tr>
                        <td style={{ textAlign: "center" }}><code>&gt;</code></td>
                        <td>increment the data pointer (to point to the next cell to the right).</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}><code>&lt;</code></td>
                        <td>decrement the data pointer (to point to the next cell to the left).</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}><code>+</code></td>
                        <td>increment (increase by one) the byte at the data pointer.</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}><code>-</code></td>
                        <td>decrement (decrease by one) the byte at the data pointer.</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}><code>.</code></td>
                        <td>output the byte at the data pointer.</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}><code>,</code></td>
                        <td>accept one byte of input, storing its value in the byte at the data pointer.</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}><code>[</code></td>
                        <td>if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it <i>forward</i> to the command after the <i>matching</i> <code>]</code> command.</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}><code>]</code></td>
                        <td>if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it <i>back</i> to the command after the <i>matching</i> <code>[</code> command.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default QuickReference      