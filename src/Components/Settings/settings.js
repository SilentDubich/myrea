import React from "react";
import {ChangeNameClassContainer} from "./СhangeName/changeNameClassContainer";
import ChangeAboutMe from "./ChangeAboutMe/changeAboutMe";
import ChangeContacts from "./ChangeContacts/changeContacts";
import ChangeLookJob from "./ChangeLookJob/changeLookJob";
import {CreateFieldForm} from "../Common/createFieldForm";
import {renderField} from "../Validations/LoginValidate/loginAsyncForm";


function Settings(props) {
    let onSubmit = data => {
        props.putProfileInfoThunk(data, props.id)
    }
    return(
        <div>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <ChangeNameClassContainer/>
                <ChangeAboutMe/>
                <ChangeContacts contacts={props.contacts}/>
                <ChangeLookJob/>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}


export default Settings
