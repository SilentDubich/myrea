import React from "react";
import Sarumyan from "../../../img/Avatars/sarumyan.jpg";
import {API} from "../API/API";

const GET_PROFILE = 'getProfile';
export const getProfile = user => ({type: GET_PROFILE, user});
const SET_PROFILE = 'setProfile';
export const setProfile = bool => ({type: SET_PROFILE, bool});
const LOG_DATA = 'logData';
export const logData = (id, login, email) =>({type: LOG_DATA, data: {id, login, email}});
const LOGIN = 'login';
export const login = (email, password) => ({type: LOGIN, data: {email, password}})

export const getProfileThunk = (id) => {
    return dispatch => {
        API.getProfile(id)
            .then(data => {
                dispatch(getProfile(data));
                dispatch(setProfile(false))
            })
    }
};

let defaultStateProfile =  {
    logged: {
        id: 6554,
        Name: 'Sarumyan',
        LastName: 'Armyanskiy',
        Status: 'Just I saw the dollar exchange rate',
        Avatar: Sarumyan,
        logData: {
            id: null,
            login: null,
            email: null
        },
        isLogged: false
    },
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
    // debugger
    let stateCopy = {
        ...state
    }
    switch (action.type) {
        case GET_PROFILE:
            let currentProfile = {
                id: action.user.userId,
                Name: action.user.fullName,
                Status: action.user.aboutMe,
                Avatar: action.user.photos.small,
                Contacts: {
                    Facebook: action.user.contacts.facebook,
                    Vk: action.user.contacts.vk
                }
            };
            return {...state, currentProfile};
        case SET_PROFILE:
            return {...state, myProfile: action.bool};
        case LOG_DATA:
            stateCopy.logged.logData.id = action.data.id;
            stateCopy.logged.logData.login = action.data.login;
            stateCopy.logged.logData.email = action.data.email;
            stateCopy.logged.isLogged = !!action.data.id;
            return stateCopy
        case LOGIN:
            return state
        default:
            return state

    }


}
