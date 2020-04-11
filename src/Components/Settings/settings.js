import React from "react";
import {ChangeNameClassContainer} from "./СhangeName/changeNameClassContainer";
import {Field} from "redux-form";
import ChangeAboutMe from "./ChangeAboutMe/changeAboutMe";
import ChangePhoto from "./ChangePhoto/changePhoto";
import {putProfileInfoThunk} from "../DataBases/Reducers/ProfileInfoReducer";
import ChangeContacts from "./ChangeContacts/changeContacts";
import ChangeLookJob from "./ChangeLookJob/changeLookJob";




function Settings(props) {
    let onSubmit = data => {
        props.putProfileInfoThunk(data, props.id)
    }
    return(
        <div>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <ChangeNameClassContainer/>
                <ChangeAboutMe/>
                <ChangeContacts/>
                <ChangeLookJob/>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}


export default Settings
