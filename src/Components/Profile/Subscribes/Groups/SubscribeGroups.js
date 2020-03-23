import React from "react";
import Subscribe from '../../../../CssModules/Profile/Subscribe/Subscribe.module.css'

function Groups(props) {
    return(
        <div>
            <img className={Subscribe.Group__Ava} src={props.Picture}/>
            <p className={Subscribe.Group__Font}>{props.GroupName}</p>
        </div>
    )
}

export default Groups