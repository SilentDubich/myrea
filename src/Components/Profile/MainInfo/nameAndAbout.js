import React from "react";
import Content from "../../../CssModules/content.module.css";
import {ReduxStatusForm, StatusClassContainer} from "./Status/statusClassContainer";

function MainInfo(props) {
    return(
        <div>
            <div className={`${Content.content__mainContentName} ${Content.content__mainContentHeader}`}>
                <h1>{`${props.name}`}</h1>
                <ReduxStatusForm/>
                {/*<StatusClassContainer/>*/}
            </div>
            <div className={`${Content.content__menu_decorationBlocks}`}>
                <p>about</p>
            </div>
        </div>
    )
}

export default MainInfo
