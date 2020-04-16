import React from "react";
import Sarumyan from "../../../img/Avatars/sarumyan.jpg";
import {API} from "../API/API";
import {Redirect} from "react-router-dom";
import {loadProfileData, logData} from "./LoginReducer";
import {switchIsFetching} from "./UserReducer";

const GET_PROFILE = 'getProfile';
export const getProfile = user => ({type: GET_PROFILE, user});
const SET_PROFILE = 'setProfile';
export const setProfile = bool => ({type: SET_PROFILE, bool});
const GET_MY_PROFILE = 'getMyProfile';
export const getMyProfile = data => ({type: GET_MY_PROFILE, data});
const GET_FOLLOW = 'follow';
export const getFollow = boolean => ({type: GET_FOLLOW, boolean});
const GET_STATUS = 'getStatus';
export const getStatus = status => ({type: GET_STATUS, status});
const SET_TEMPS_MY_PROFILE = 'setTempsMyProfile';
export const setTemps = (name, status, avatar, contacts) => ({
    type: SET_TEMPS_MY_PROFILE,
    temps: {name, status, avatar, contacts}
});
const UPDATE_TEMPS_MY_PROFILE = 'updateTempsMyProfile';
export const updateTemps = (data, temp) => ({type: UPDATE_TEMPS_MY_PROFILE, data, temp});

export const getProfileThunk = id => {
    return dispatch => {
        return API.getProfile(id)
            .then(data => {
                dispatch(getProfile(data));
            })
            .then(() => {
                return API.getStatus(id)
                    .then(data => {
                        // debugger
                        dispatch(getStatus(data));
                    })
            }).then(() => {
                return API.getFollow(id)
                    .then(response => {
                        dispatch(getFollow(response))
                    })
            })
    }
};
export const getMyProfileThunk = (id) => {
    return dispatch => {
        // debugger
        return API.getMyProfile(id)
            .then(data => {
                dispatch(getMyProfile(data));
            })
            .then(() => {
                return API.getStatus(id)
                    .then(data => {
                        dispatch(getStatus(data));
                    })
            })
            .then(() => {
                return API.getDialogs()
                    .then(data => {
                        // debugger
                    })
            })

    }
};

export const setAnotherProfile = id => dispatch => {
    dispatch(switchIsFetching(true))
    dispatch(setProfile(false))
    let promise = dispatch(getProfileThunk(id));
    Promise.all([promise])
        .then(() => {
            // debugger
            dispatch(switchIsFetching(false))
        });
}


export const initializeApp = id => dispatch => {
    let promise = dispatch(getMyProfileThunk(id));
    Promise.all([promise])
        .then(() => {
        })
        .then(() => {
            dispatch(loadProfileData());
        });
}

export const getStatusThunk = (id) => {
    return dispatch => {
        // debugger
        return API.getStatus(id)
            .then(data => {
                // debugger
                return dispatch(getStatus(data));
            })
    }
};
export const putStatusThunk = (status, id) => {
    return dispatch => {
        // debugger
        return API.putStatus(status)
            .then(() => {
                return dispatch(getStatus(status));
            })
    }
};
export const putProfileInfoThunk = (data, id) => {
    return dispatch => {
        // debugger
        return API.putProfileInfo(data)
            .then(() => {
                return API.getMyProfile(id)
                    .then(data => {
                        dispatch(getMyProfile(data));
                        dispatch(setProfile(true))
                    })
            })

    }
};
export const changePasswordThunk = formData => {
    return dispatch => {
        // debugger
        return API.switchPassword(formData)

    }
};
export const postProfilePhotoThunk = (formData, id) => {
    return dispatch => {
        // debugger
        return API.postAvatarPhoto(formData)
            .then(() => {
                return API.getMyProfile(id)
                    .then(data => {
                        dispatch(getMyProfile(data));
                        dispatch(setProfile(true))
                    })
            })
    }
};

let defaultStateProfile = {
    logged: {
        id: null,
        FullName: null,
        LastName: null,
        Status: null,
        AboutMe: null,
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
    currentProfile: {
        id: null,
        Name: null,
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
        },
        followed: null
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
                FullName: action.user.fullName,
                AboutMe: action.user.aboutMe,
                Avatar: action.user.photos.large,
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
                FullName: action.data.fullName,
                Status: stateCopy.logged.Status,
                AboutMe: action.data.aboutMe,
                Avatar: action.data.photos.large,
                contacts: {
                    facebook: action.data.contacts.facebook,
                    Vk: action.data.contacts.vk
                }
            };
            // debugger
            return {...state, logged: myProfile}
        case GET_STATUS:
            // баг со статусом через сообщения здесь
            // в диспатч добавить доп булевский параметр
            // также можно сделать с диспачем профиля
            stateCopy.myProfile
                ?
                stateCopy.logged.Status = action.status
                :
                stateCopy.currentProfile.Status = action.status
            // stateCopy.logged.Status = action.status
            // debugger
            return stateCopy
        case GET_FOLLOW:
            stateCopy.currentProfile.followed = action.boolean
            return stateCopy
        default:
            return state

    }


}
