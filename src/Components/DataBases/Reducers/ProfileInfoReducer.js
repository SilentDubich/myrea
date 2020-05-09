import React from "react";
import {API} from "../API/API";
import {loadProfileData} from "./LoginReducer";
import {switchIsFetching} from "./UserReducer";
import emptyPhoto from "./../../../img/Avatars/nullPhoto.jpg"
import {getAllDialogs} from "./MessagesReducer";
import {loadFriends} from "./FriendsReducer";

const GET_PROFILE = 'getProfile';
export const getProfile = (user, who) => ({type: GET_PROFILE, user, who});
const SET_PROFILE = 'setProfile';
export const setProfile = bool => ({type: SET_PROFILE, bool});
const GET_FOLLOW = 'follow';
export const getFollow = boolean => ({type: GET_FOLLOW, boolean});
const GET_STATUS = 'getStatus';
export const getStatus = status => ({type: GET_STATUS, status});


const getProfileInfo = (id, who) => {
    return async dispatch => {
        let data = await API.getProfile(id)
        await dispatch(getProfile(data, who));
        await dispatch(getStatusThunk(id))
    }
}


export const getProfileThunk = (id, who) => {
    return async dispatch => {
        await dispatch(getProfileInfo(id, who))
        let responseFollow = await API.getFollow(id)
        return dispatch(getFollow(responseFollow))
    }
};

export const getMyProfileThunk = (id, who) => {
    return async dispatch => {
        await dispatch(getProfileInfo(id, who))
        let friends = await API.getUsers(100,1,'',true)
        dispatch(loadFriends(friends.items))
        let response = await API.getDialogs()
        return dispatch(getAllDialogs(response))
    }
};


export const setAnotherProfile = (id, who) => async dispatch => {
    let checkWho = who === 'me'
    dispatch(switchIsFetching(true))
    dispatch(setProfile(checkWho))
    checkWho ? await dispatch(getMyProfileThunk(id, who)) : await dispatch(getProfileThunk(id, who));
    dispatch(switchIsFetching(false))
}

export const initializeApp = id => async dispatch => {
    await dispatch(getMyProfileThunk(id, 'me'));
    return dispatch(loadProfileData());
}

export const getStatusThunk = id => {
    return async dispatch => {
        let data = await API.getStatus(id)
        return dispatch(getStatus(data));
    }
};

export const putStatusThunk = status => {
    return async dispatch => {
        await API.putStatus(status)
        return dispatch(getStatus(status));
    }
};


export const putProfileInfoThunk = (data, id) => {
    return async dispatch => {
        await API.putProfileInfo(data)
        let response = await API.getProfile(id)
        dispatch(getProfile(response, 'me'));
        dispatch(setProfile(true))
    }
};


export const postProfilePhotoThunk = (formData, id) => {
    return async dispatch => {
        await API.postAvatarPhoto(formData)
        let data = await API.getProfile(id)
        dispatch(getProfile(data, 'me'));
        dispatch(setProfile(true))
    }
};

let defaultStateProfile = {
    logged: {
        userId: null,
        fullName: null,
        status: null,
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        photos: {
            large: null,
            small: null
        },
    },
    currentProfile: {
        userId: null,
        fullName: null,
        status: null,
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        photos: {
            large: null,
            small: null
        },},
    followed: null,
    myProfile: true,
};

export function ProfileInstructions(state = defaultStateProfile, action) {
    let stateCopy = {
        ...state,
    }
    switch (action.type) {
        case GET_PROFILE:
            action.who === 'me' ? stateCopy.logged = action.user : stateCopy.currentProfile = action.user
            stateCopy.logged.status = state.logged.status
            return stateCopy;
        case SET_PROFILE:
            return {...state, myProfile: action.bool};
        case GET_STATUS:
            stateCopy.myProfile ? stateCopy.logged.status = action.status : stateCopy.currentProfile.status = action.status
            return stateCopy
        case GET_FOLLOW:
            stateCopy.followed = action.boolean
            return stateCopy
        default:
            return state

    }
}
