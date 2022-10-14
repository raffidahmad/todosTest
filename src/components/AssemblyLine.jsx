import { useState } from "react";
import InputBox from "./InputBox";

function AssemblyLine(props) {

    function addAssemblyLineItem(item) {
        props.setAssemblyLine(item);
    }
    return (
        <div >
            <InputBox onAdd={addAssemblyLineItem} />
            <div>
                Ideas
            </div>
            <ul>
                {props.assemblyLine && props.assemblyLine.map((assemblyLineItem, index) => (
                    <li key={index}
                        onClick={props.leftClick}
                        onContextMenu={props.rightClick}>
                        {assemblyLineItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AssemblyLine;