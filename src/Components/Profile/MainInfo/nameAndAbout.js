import React from "react";
import Content from "../../../CssModules/content.module.css";
import {ReduxStatusForm, StatusClassContainer} from "./Status/statusClassContainer";

function MainInfo(props) {
    return(
        <div>
            <div className={`${Content.content__mainContentName} ${Content.content__menu_decorationBlocks}`}>
                <h1>{`${props.name}`}</h1>
                <ReduxStatusForm  initialValues={{status: props.status}}/>
            </div>
            <div className={`${Content.content__menu_decorationBlocks}`}>
                <p>{props.aboutMe}</p>
            </div>
        </div>
    )
}

export default MainInfo
