import React from "react";
import * as axios from "axios";
import {store} from '../Redux/Store';

const instance = axios.create({
    withCredentials: true,
    headers: {
        // 'API-KEY': '42e7eb43-bd21-414d-a069-9584e7654f6a',
        'API-KEY': '8d2e390a-6ddc-4d40-87d5-55b4df812b3f',
        // 'API-KEY': '750fc5a8-75a5-4ef1-94f4-80017fafe472',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});
const instanceProfile = axios.create({
    withCredentials: true,
    headers: {
        // 'API-KEY': '42e7eb43-bd21-414d-a069-9584e7654f6a',
        'API-KEY': '8d2e390a-6ddc-4d40-87d5-55b4df812b3f',
        // 'API-KEY': '750fc5a8-75a5-4ef1-94f4-80017fafe472',
        'Content-type': 'application/x-www-form-urlencoded'
    },
    baseURL: 'https://social-network.samuraijs.com/'
});

const instancePhoto = axios.create({
    withCredentials: true,
    headers: {
        // 'API-KEY': '42e7eb43-bd21-414d-a069-9584e7654f6a',
        'API-KEY': '8d2e390a-6ddc-4d40-87d5-55b4df812b3f',
        // 'API-KEY': '750fc5a8-75a5-4ef1-94f4-80017fafe472',
        'Content-Type': 'multipart/form-data'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const API = {
    getUsers(pageSize = 10, currentPage = 1, user = '') {
        return instance.get(`users?count=${pageSize}&page=${currentPage}&term=${user}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                // debugger
                return response.data
            })
    },
    getMyProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                // debugger
                return response.data
            })
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => {
                // debugger
                return response.data
            })
    },

    putStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    putProfileInfo(data) {
        return instance.put(`profile`, data)
    },

    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                // debugger
                return response.data
            })
    },
    postLog(email, password, remember, captcha) {
        return instance.post(`auth/login?email=${email}&password=${password}&rememberMe=${remember}&captcha=${captcha}`)
            .then(response => {
                return response
            })
    },
    postLogOut() {
        return instance.post(`auth/logout`)
            .then(response => {
                return response
            })
    },
    getFollow(id) {
        return instance.get(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postFriendFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response
            })
    },
    postFriendUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response
            })
    },
    postAvatarPhoto(formData) {
        return instancePhoto.post(`profile/photo`, formData)
            .then(response => {
                // debugger
                return response.data.data
            })
    },
    putNewDialog(id) {
        // debugger
        return instance.put(`dialogs/${id}`)
            .then(response => {

                return response
            })
    },
    getDialogs() {
        // debugger
        return instance.get(`dialogs`)
            .then(response => {
                debugger
                return response.data
            })
    },
    postMessage(id, body) {
        // debugger
        return instance.post(`dialogs/${id}/messages`, {body})
            .then(response => {
                // debugger
                return response
            })
    },
    deleteMessage(messageId) {
        // debugger
        return instance.delete(`dialogs/messages/${messageId}`)
            .then(response => {
                // debugger
                return response
            })
    },
    getDialog(id) {
        return instance.get(`dialogs/${id}/messages`)
            .then(response => {
                debugger
                return response.data
            })
    },
    getAPI_KEY(id) {
        return instanceProfile.post(`Auth/Account/RegenerateApiKey`)
            .then(response => {
                // debugger
                return response.data
            })
    },
    switchPassword(formData) {
        return instanceProfile.post(`Auth/Account/UpdatePassword`, formData)
            .then(response => {
                // debugger
                return response
            })
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                // debugger
                return response.data.url
            })
    }
};


// ChangePasswordModel.OldPassword, ChangePasswordModel.NewPassword, formData

