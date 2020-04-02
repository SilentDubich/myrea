import React from "react";
import Sarumyan from "../../../img/Avatars/sarumyan.jpg";
import {API} from "../API/API";
import {Redirect} from "react-router-dom";

const GET_PROFILE = 'getProfile';
export const getProfile = user => ({type: GET_PROFILE, user});
const SET_PROFILE = 'setProfile';
export const setProfile = bool => ({type: SET_PROFILE, bool});
const GET_MY_PROFILE = 'getMyProfile';
export const getMyProfile = data => ({type: GET_MY_PROFILE, data});
const GET_STATUS = 'getStatus';
export const getStatus = status => ({type: GET_STATUS, status});
const SET_TEMPS_MY_PROFILE = 'setTempsMyProfile';
export const setTemps = (name, status, avatar, contacts) => ({
    type: SET_TEMPS_MY_PROFILE,
    temps: {name, status, avatar, contacts}
});
const UPDATE_TEMPS_MY_PROFILE = 'updateTempsMyProfile';
export const updateTemps = (data, temp) => ({type: UPDATE_TEMPS_MY_PROFILE, data, temp});

export const getProfileThunk = (id) => {
    return dispatch => {
        API.getProfile(id)
            .then(data => {
                dispatch(getProfile(data));
                dispatch(setProfile(false))
            })
    }
};
export const getMyProfileThunk = (id) => {
    return dispatch => {
        // debugger
        API.getMyProfile(id)
            .then(data => {
                // debugger
                dispatch(getMyProfile(data));
                dispatch(setTemps(data.fullName, data.photos.small, data.contacts));
                dispatch(setProfile(true))

            })
    }
};
export const getStatusThunk = (id) => {
    return dispatch => {
        // debugger
        API.getStatus(id)
            .then(data => {
                // debugger
                dispatch(getStatus(data));
            })
    }
};
export const putStatusThunk = (status, id) => {
    return dispatch => {
        debugger
        API.putStatus(status)
            .then( () => {
                API.getStatus(id)
                    .then(data => {
                        // debugger
                        dispatch(getStatus(data));
                    })
            })
    }
};

let defaultStateProfile = {
    logged: {
        id: null,
        Name: null,
        LastName: null,
        Status: null,
        Avatar: null,
        Contacts: {
            Facebook: null,
            Website: null,
            Vk: null,
            Twitter: null,
            Instagram: null,
            Youtube: null,
            Github: null,
            MainLink: null
        }
    },
    temps: {
        name: null,
        status: null,
        avatar: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        }
    },
    // logged: {
    //     id: 6554,
    //     Name: 'Sarumyan Сделай смену имени и статуса, и всего-всего',
    //     LastName: 'Armyanskiy',
    //     Status: 'Just I saw the dollar exchange rate',
    //     Avatar: Sarumyan,
    //     Contacts: {
    //         Facebook: null,
    //         Vk: null
    //     }
    // },
    currentProfile: {
        id: null,
        Name: null,
        Status: null,
        Avatar: null,
        Contacts: {
            Facebook: null,
            Vk: null
        }
    },
    myProfile: true
};

export function ProfileInstructions(state = defaultStateProfile, action) {

    let stateCopy = {
        ...state
    }
    // debugger
    switch (action.type) {
        case GET_PROFILE:
            let currentProfile = {
                id: action.user.userId,
                Name: action.user.fullName,
                // Status: action.user.aboutMe,
                Avatar: action.user.photos.small,
                Contacts: {
                    Facebook: action.user.contacts.facebook,
                    Vk: action.user.contacts.vk
                }
            };
            return {...state, currentProfile};
        case SET_PROFILE:
            return {...state, myProfile: action.bool};
        case SET_TEMPS_MY_PROFILE:
            return {...state, temps: action.temps};
        case UPDATE_TEMPS_MY_PROFILE:

            return {...state, temp: action.data};
        case GET_MY_PROFILE:
            let myProfile = {
                id: action.data.userId,
                Name: action.data.fullName,
                Avatar: action.data.photos.small,
                Contacts: {
                    Facebook: action.data.contacts.facebook,
                    Vk: action.data.contacts.vk
                }
            };
            // debugger
            return {...state, logged: myProfile}
        case GET_STATUS:
            stateCopy.logged.Status = action.status.data
            // debugger
            return stateCopy
        default:
            return state

    }


}
