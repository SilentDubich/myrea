import React from "react";
import Content from "../../../CssModules/content.module.css";

function MainInfo(props) {
    return(
        <div>
            <div className={`${Content.content__mainContentName} ${Content.content__mainContentHeader}`}>
                <h1>{`${props.state.profileInfoReducer.Name} ${props.state.profileInfoReducer.LastName}`}</h1>
                <h3>{props.state.profileInfoReducer.Status}</h3>
            </div>
            <div className={`${Content.content__menu_decorationBlocks}`}>
                <p>About</p>
            </div>
        </div>
    )
}

export default MainInfo