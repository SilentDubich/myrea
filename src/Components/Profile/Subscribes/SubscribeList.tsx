import React, {FC} from "react";
import Content from "../../../CssModules/content.module.css";
import Subscribe from '../../../CssModules/Profile/Subscribe/Subscribe.module.css'
import {Groups} from "./Groups/SubscribeGroups";


type mapStateType = {
    subscribe: Array<any>
}

export const Subscribes:FC<mapStateType> = (props) => {
    let allSubs = props.subscribe.map( sub => <Groups key={sub.id} GroupName={sub.Name} Picture={sub.Avatar}/>);
    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <p className={Subscribe.font__size}>My subscribes: <span>{allSubs.length}</span></p>
            <div className={Subscribe.display__grid}>
                {allSubs}
            </div>
        </div>
    )
}
