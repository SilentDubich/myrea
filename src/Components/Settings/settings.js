import React from "react";
import {ChangeNameClassContainer} from "./СhangeName/changeNameClassContainer";
import {Field} from "redux-form";
import ChangeAboutMe from "./ChangeAboutMe/changeAboutMe";
import ChangePhoto from "./ChangePhoto/changePhoto";
import {putProfileInfoThunk} from "../DataBases/Reducers/ProfileInfoReducer";
import ChangeContacts from "./ChangeContacts/changeContacts";
import ChangeLookJob from "./ChangeLookJob/changeLookJob";
import {ChangeContactsForm} from "./ChangeContacts/changeContactsForm";




function Settings(props) {
    let onSubmit = dataInfo => {
        // let contacts = {
        //     'facebook': dataInfo.facebook,
        //     'website': dataInfo.website,
        //     'vk': dataInfo.vk,
        //     'twitter': dataInfo.twitter,
        //     'instagram': dataInfo.instagram,
        //     'youtube': dataInfo.youtube,
        //     'github': dataInfo.github,
        //     'mainLink': dataInfo.mainLink
        // };
        // let mainProfileInfo = {
        //     'fullName': dataInfo.fullName,
        //     'aboutMe': dataInfo.aboutMe,
        //     'LookingForAJob': dataInfo.LookingForAJob,
        //     'LookingForAJobDescription': dataInfo.LookingForAJobDescription
        // };
        let contacts = {
            'facebook': dataInfo.facebook,
            'website': dataInfo.website,
            'vk': dataInfo.vk,
            'twitter': dataInfo.twitter,
            'instagram': dataInfo.instagram,
            'youtube': dataInfo.youtube,
            'github': dataInfo.github,
            'mainLink': dataInfo.mainLink
        };
        let mainProfileInfo = {
            'AboutMe': dataInfo.AboutMe,
            'contacts': contacts,
            'LookingForAJob': dataInfo.LookingForAJob,
            'LookingForAJobDescription': dataInfo.LookingForAJobDescription,
            'FullName': dataInfo.FullName

        };
        let data = {...mainProfileInfo}
        debugger
        props.putProfileInfoThunk(data, props.id)
        // console.log('submited');

    }
    return(
        <div>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <ChangeNameClassContainer/>
                <ChangeAboutMe/>
                <ChangeContacts/>
                {/*<ChangeContactsForm/>*/}
                <ChangeLookJob/>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}


export default Settings
