import React, {useState} from "react";
import Content from "../../../CssModules/content.module.css";
import {ReduxStatusForm, StatusClassContainer} from "./Status/statusClassContainer";
import InfoS from "../../../CssModules/Profile/MainInfo/mainInfo.module.css"

function MainInfo(props) {
    const [more, setMore] = useState(false)
    const keys = Object.keys(props.contacts)
    const values = Object.values(props.contacts)
    let index = 0
    const containerClasses = `${InfoS.mainInfo_contacts__flexDisplay}`
    const valueClasses = `${InfoS.mainInfo_value__margin} ${InfoS.mainInfo_value__width} ${InfoS.mainInfo_value__decor}`
    const keyClasses = `${InfoS.mainInfo_key__width} ${InfoS.mainInfo_key__decor}`
    const showMoreClasses = `${InfoS.mainInfo_showMore__decor}`
    return (
        <div>
            <div className={`${Content.content__mainContentName} ${Content.content__menu_decorationBlocks}`}>
                <h1>{`${props.name}`}</h1>
                <ReduxStatusForm initialValues={{status: props.status}}/>
            </div>
            <div className={`${Content.content__menu_decorationBlocks}`}>
                <div className={containerClasses}>
                    <div className={keyClasses}><span>About me:</span></div>
                    <div className={valueClasses}><span>{props.aboutMe}</span></div>
                </div>
                <div className={containerClasses}>
                    <div className={keyClasses}><span>My skills:</span></div>
                    <div className={valueClasses}><span>{props.skills}</span></div>
                </div>
                <div className={containerClasses}>
                    <div className={keyClasses}><span>In searching:</span></div>
                    <div className={valueClasses}><span>{props.search ? 'Yes' : 'No'}</span></div>
                </div>
                {!more &&
                <div onClick={() => setMore(true)} className={showMoreClasses}><span>Show more information</span></div>}
                {more &&
                <div onClick={() => setMore(false)} className={showMoreClasses}><span>Hide more information</span>
                </div>}
                {more && keys.map(key => {
                    return (
                        <div className={containerClasses}>
                            <div className={keyClasses}><span>{key[0].toUpperCase() + key.slice(1) + ':'}</span></div>
                            <div className={valueClasses}><span>{values[index++]}</span></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainInfo
