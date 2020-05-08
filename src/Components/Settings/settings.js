import React, {useState} from "react";
import ChangeAboutMe from "./ChangeAboutMe/changeAboutMe";
import ChangeContacts from "./ChangeContacts/changeContacts";
import ChangeLookJob from "./ChangeLookJob/changeLookJob";
import ChangeName from "./СhangeName/changeNameClass";
import settingsS from "../../CssModules/Settings/settingsStyles.module.css"
import Content from "../../CssModules/content.module.css";

function Settings(props) {
    let onSubmit = async data => {
        setDisabled(true)
        await props.putProfileInfoThunk(data, props.id)
        setDisabled(false)
    }
    const [disabled, setDisabled] = useState(false)
    const buttonClasses = `${settingsS.settings__button} ${settingsS.settings__buttonWidth} ${settingsS.settings_button__padding}`
    const containerClasses = `${settingsS.settings_container__flex} ${settingsS.settings_container__margin}`
    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <ChangeName/>
                <ChangeContacts contacts={props.contacts}/>
                <ChangeAboutMe/>
                <ChangeLookJob/>
                <div className={containerClasses}>
                    <button disabled={disabled} className={`${buttonClasses} ${disabled && settingsS.settings__buttonDisabled}`}>Save</button>
                </div>
            </form>
        </div>
    )
}


export default Settings
