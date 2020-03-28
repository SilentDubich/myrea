import React from "react";
import {API} from "../API/API";

const LOGIN_REQUEST = 'loginRequest';
export const loginRequest = (email, password, remember) => ({type: LOGIN_REQUEST, data: {email, password, remember}});
const CHANGE_EMAIL_DATA = 'changeEmailData';
export const changeEmail = email => ({type: CHANGE_EMAIL_DATA, email})
const CHANGE_PASSWORD_DATA = 'changePasswordData';
export const changePassword = password => ({type: CHANGE_PASSWORD_DATA, password})
const CHANGE_REMEMBER_DATA = 'changeRememberData';
export const changeRemember = remember => ({type: CHANGE_REMEMBER_DATA, remember})
const LOG_DATA = 'logData';
export const logData = (id, login, email) =>({type: LOG_DATA, data: {id, login, email}});

export const postLogThunk = (email, password, remember) => {
    return dispatch => {
        API.postLog(email, password, remember)
            .then(response => {
                return response.status
            })
    }
};
export const getAuthThunk = (email, password, remember) => {
    return dispatch => {
        API.getAuth()
            .then(data => {
                    dispatch(logData(data.data.id, data.data.login, data.data.email));
                    dispatch(loginRequest(email, password, remember))
                    debugger
                }
            )
    }
};


let defaultStateLogin = {
    email: 'kirill.dubov.2012@mail.ru',
    password: 'Qwerty12345!',
    remember: false,
    logData: {
        id: null,
        login: null,
        email: null
    },
    isLogged: false
};

export function LoginInstructions(state = defaultStateLogin, action) {
    // debugger
    let stateCopy = {
        ...state
    }
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, ...action.data}
        case CHANGE_EMAIL_DATA:
            return {...state, email: action.email}
        case CHANGE_PASSWORD_DATA:
            return {...state, password: action.password}
        case CHANGE_REMEMBER_DATA:
            return {...state, remember: action.remember}
        case LOG_DATA:
            stateCopy.logged.logData.id = action.data.id;
            stateCopy.logged.logData.login = action.data.login;
            stateCopy.logged.logData.email = action.data.email;
            stateCopy.logged.isLogged = !!action.data.id;
            return stateCopy
        default:
            return state

    }
}
