import React from "react";
import UpMenu from "../../CssModules/UpperMenu/UpperMenu.module.css";
import {UpperLogInfoContainer} from "./Login/upperLogInfoContainer";


function UpperClassContainer() {

    return (
        <div className={`${UpMenu.container__menu}`}>
            <UpperLogInfoContainer/>
        </div>
    )
}

export default UpperClassContainer
