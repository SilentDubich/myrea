import React from "react";
import {API} from "../API/API";
import {getMyProfileThunk} from "./ProfileInfoReducer";
import {Redirect} from "react-router-dom";
import {reset, stopSubmit} from "redux-form";

const LOGIN_REQUEST = 'loginRequest';
export const loginRequest = (email, password, remember) => ({type: LOGIN_REQUEST, data: {email, password, remember}});
const CHANGE_EMAIL_DATA = 'changeEmailData';
export const changeEmail = email => ({type: CHANGE_EMAIL_DATA, email})
const CHANGE_PASSWORD_DATA = 'changePasswordData';
export const changePassword = password => ({type: CHANGE_PASSWORD_DATA, password})
const CHANGE_REMEMBER_DATA = 'changeRememberData';
export const changeRemember = remember => ({type: CHANGE_REMEMBER_DATA, remember})
const LOG_DATA = 'logData';
export const logData = (id, login, email) => ({type: LOG_DATA, data: {id, login, email}});
const BUTTON_ACTION = 'buttonAction';
export const buttonAction = bool => ({type: BUTTON_ACTION, bool});
const LOAD_PROFILE_DATA = 'loadProfileData';
export const loadProfileData = () => ({type: LOAD_PROFILE_DATA});
const GET_CAPTCHA = 'getCaptcha';
export const getCaptcha = cap => ({type: GET_CAPTCHA, cap});

export const postLogThunk = (email, password, remember, captcha) => {
    return dispatch => {
        dispatch(buttonAction(true))
        API.postLog(email, password, remember, captcha)
            .then(response => {
                // debugger
                return response
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    API.getAuth()
                        .then(data => {
                                dispatch(logData(data.data.id, data.data.login, data.data.email));
                                dispatch(loginRequest(email, password, remember))
                                // dispatch(buttonAction(false))
                                return data.data.id
                            }
                        )
                        .then((data) => {
                            // debugger
                            dispatch(getMyProfileThunk(data));
                            dispatch(reset('login'))
                        })
                } else if (response.data.resultCode === 10) {
                    API.getCaptcha()
                        .then(data => {
                            dispatch(getCaptcha(data))
                        })
                } else {
                    dispatch(stopSubmit('asyncValidation', {_error: response.data.messages[0]}))
                }
            })
            .then(() => {
                dispatch(buttonAction(false))
            })

    }
};
export const postLogOutThunk = () => {
    return dispatch => {
        API.postLogOut()
            .then(response => {
                dispatch(logData(null, null, null));
                return response
            })
            .then((response) => {
                // debugger
                API.getAuth()
            })
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
    // captchaImage: null,
    captcha: null
};

export function LoginInstructions(state = defaultStateLogin, action) {

    let stateCopy = {
        ...state
    }
    // debugger
    switch (action.type) {
        case GET_CAPTCHA:
            return {...state, captcha: action.cap}
        case LOGIN_REQUEST:
            return {...state, ...action.data, email: '', password: '', remember: false}
        case CHANGE_EMAIL_DATA:
            return {...state, email: action.email}
        case CHANGE_PASSWORD_DATA:
            return {...state, password: action.password}
        case CHANGE_REMEMBER_DATA:
            return {...state, remember: action.remember}
        case BUTTON_ACTION:
            return {...state, buttonRequest: action.bool}
        case LOG_DATA:
            stateCopy.logData.id = action.data.id;
            stateCopy.logData.login = action.data.login;
            stateCopy.logData.email = action.data.email;
            stateCopy.isLogged = !!action.data.id;
            return stateCopy
        case LOAD_PROFILE_DATA:
            return {...state, loadProfileData: true}
        default:
            return state

    }
}
