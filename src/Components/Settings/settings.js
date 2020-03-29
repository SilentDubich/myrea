import React from "react";




function Settings(props) {
    let tempName = React.createRef();
    let Change = text => {
        debugger
        let request = text.target.value;

    }

    debugger
    return(
        <div>
            <div>
                <p>Change name:</p>
                <input onChange={ref => Change(ref)} value={props.temps.name} ref={tempName} placeholder='Change your name'/>
            </div>
        </div>
    )
}


export default Settings
