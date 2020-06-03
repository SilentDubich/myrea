import Text from "../mainText";
import React from "react";
import UpperClassContainer from "../UpperMenu/upperClassContainer";

function MacketApp(props: any) {
    return (
        <div>
            <div>
                <UpperClassContainer/>
            </div>
            <div className='container'>
                <Text/>
            </div>
        </div>
    )
}

export default MacketApp
