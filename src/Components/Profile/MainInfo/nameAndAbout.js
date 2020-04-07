import React from "react";
import Content from "../../../CssModules/content.module.css";
import {ReduxStatusForm, StatusClassContainer} from "./Status/statusClassContainer";

function MainInfo(props) {
    // debugger
    let initial = () => {
        return {
            status: props.status
        }
    }
    return(
        <div>
            <div className={`${Content.content__mainContentName} ${Content.content__menu_decorationBlocks}`}>
                <h1>{`${props.name}`}</h1>
                <ReduxStatusForm initialValues={initial()}/>
            </div>
            <div className={`${Content.content__menu_decorationBlocks}`}>
                <p>about</p>
            </div>
        </div>
    )
}

export default MainInfo
