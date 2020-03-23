import Navigate from "../UpperMenu/upper";
import Text from "../mainText";
import React from "react";

function MacketApp(props){
    return(
        <div>
            <div>
                <Navigate/>
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