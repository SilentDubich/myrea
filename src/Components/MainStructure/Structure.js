import Text from "../mainText";
import React from "react";
import {UpperClassContainerTwo} from "../UpperMenu/upperClassContainerX2";

function MacketApp(props) {
    return (
        <div>
            <div>
                <UpperClassContainerTwo/>
            </div>
            <div className='container'>
                <Text/>
            </div>
        </div>
    )
}

export default MacketApp
