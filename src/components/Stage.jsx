import { useState } from "react";

function Stage(props){
    const [items, setItems] = useState(props.items);

    function addItem(item){
        setStage(prevStage => {
            return [...prevStage, item];
        });
    }

    return (
        <div className="stage">
            <h6>{props.name}</h6>
            <ul>
                {props.items && items.map((stageItem,index) => (
                    <li key={index} onClick={props.leftClick} onContextMenu={props.rightClick}>
                        {stageItem}
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Stage;