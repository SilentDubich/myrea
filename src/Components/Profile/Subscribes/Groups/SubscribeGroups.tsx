import React, {FC} from "react";
import Subscribe from '../../../../CssModules/Profile/Subscribe/Subscribe.module.css'

type mapStateType = {
    Picture: string
    GroupName: string
}

export const Groups:FC<mapStateType> = (props) => {
    return(
        <div>
            <img className={Subscribe.Group__Ava} src={props.Picture}/>
            <p className={Subscribe.Group__Font}>{props.GroupName}</p>
        </div>
    )
}