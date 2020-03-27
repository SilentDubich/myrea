import React from "react";

const LOGIN_REQUEST = 'loginRequest';
export const loginRequest = (email, password, remember) => ({type: LOGIN_REQUEST, data: {email, password, remember}});
const CHANGE_EMAIL_DATA = 'changeEmailData';
export const changeEmail = email => ({type: CHANGE_EMAIL_DATA, email})
const CHANGE_PASSWORD_DATA = 'changePasswordData';
export const changePassword = password => ({type: CHANGE_PASSWORD_DATA, password})
const CHANGE_REMEMBER_DATA = 'changeRememberData';
export const changeRemember = remember => ({type: CHANGE_REMEMBER_DATA, remember})

let defaultStateLogin = {
    email: 'kirill.dubov.2012@mail.ru',
    password: 'Qwerty12345!',
    remember: false
};

export function LoginInstructions(state = defaultStateLogin, action) {
    // debugger
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, ...action.data}
        case CHANGE_EMAIL_DATA:
            return {...state, email: action.email}
        case CHANGE_PASSWORD_DATA:
            return {...state, password: action.password}
        case CHANGE_REMEMBER_DATA:
            return {...state, remember: action.remember}
        default:
            return state

    }
}
