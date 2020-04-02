import Navigate from "../UpperMenu/upper";
import Text from "../mainText";
import React from "react";
import {UpperClassContainerTwo} from "../UpperMenu/upperClassContainerX2";

function MacketApp(props){
    // debugger
    return(
        <div>
            <div>
                {/*<Navigate/>*/}
                <UpperClassContainerTwo/>
            </div>
            <div className='container'>
                <Text
                    dispatch={props.dispatch}
                    state={props.state}
                />
            </div>
        </div>
    )
}

export default MacketApp
