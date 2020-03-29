import React from "react";
import * as axios from "axios";
import {store} from '../Redux/Store';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '42e7eb43-bd21-414d-a069-9584e7654f6a'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const API = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(id = store.getState().profileInfoReducer.id){
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getMyProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                debugger
                return response.data
            })
    },

    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    postLog(email, password, remember){
        return instance.post(`auth/login?email=${email}&password=${password}&rememberMe=${remember}`)
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
    }
};




