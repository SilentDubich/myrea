import React from "react";
import {API} from "../API/API";
import {getMyProfileThunk, initializeApp} from "./ProfileInfoReducer";
import {reset, stopSubmit} from "redux-form";

const LOGIN_REQUEST = 'loginRequest';
export const loginRequest = (email, password, remember) => ({type: LOGIN_REQUEST, data: {email, password, remember}});
const LOG_DATA = 'logData';
export const logData = (id, login, email) => ({type: LOG_DATA, data: {id, login, email}});
const BUTTON_ACTION = 'buttonAction';
export const buttonAction = bool => ({type: BUTTON_ACTION, bool});
const LOAD_PROFILE_DATA = 'loadProfileData';
export const loadProfileData = () => ({type: LOAD_PROFILE_DATA});
const GET_CAPTCHA = 'getCaptcha';
export const getCaptcha = cap => ({type: GET_CAPTCHA, cap});

export const postLogThunk = (email, password, remember, captcha) => {
    return async dispatch => {
        dispatch(buttonAction(true))
        let response = await API.postLog(email, password, remember, captcha)
        if (response.data.resultCode === 0) {
            let data = await API.getAuth()
            dispatch(loginRequest(email, password, remember))
            await dispatch(initializeApp(data.data.id));
            dispatch(logData(data.data.id, data.data.login, data.data.email));
        } else if (response.data.resultCode === 10) {
            let data = await API.getCaptcha()
            dispatch(getCaptcha(data))
            dispatch(stopSubmit('asyncValidation', {_error: response.data.messages[0]}))
        } else {
            dispatch(stopSubmit('asyncValidation', {_error: response.data.messages[0]}))
        }
        dispatch(buttonAction(false))
    }
};


export const postLogOutThunk = () => {
    return async dispatch => {
        await API.postLogOut()
        dispatch(logData(null, null, null));
        API.getAuth()
    }
};


let defaultStateLogin = {
    logData: {
        id: null,
        login: null,
        email: null,
    },
    isLogged: false,
    buttonRequest: false,
    loadProfileData: false,
    captcha: null
};

export function LoginInstructions(state = defaultStateLogin, action) {
    switch (action.type) {
        case GET_CAPTCHA:
            return {...state, captcha: action.cap}
        case LOGIN_REQUEST:
            return {...state, ...action.data, email: '', password: '', remember: false}
        case BUTTON_ACTION:
            return {...state, buttonRequest: action.bool}
        case LOG_DATA:
            return {...state, logData: {...action.data}, isLogged: !!action.data.id}
        case LOAD_PROFILE_DATA:
            return {...state, loadProfileData: true}
        default:
            return state

    }
}
