import React from "react";
import axios from "axios";
import {
    ApiType, GetCaptcha,
    GetDialogsType, GetMessagesType,
    GetUsersType,
    PostMessageResponseType,
    ResultCodeCaptcha,
    ResultCodes
} from "../../Common/typesAPI";
import {DialogType, LoginType, MessageType, PhotosType, ProfileType} from "../../Common/types";

const instance = axios.create({
    withCredentials: true,
    headers: {
        // 'API-KEY': '8d2e390a-6ddc-4d40-87d5-55b4df812b3f',
        'API-KEY': '616831a9-7452-4554-aa58-2d586af30e5f',
        // 'API-KEY': '92f663dc-a854-487f-b2f1-2d8848f605fc',
        // 'API-KEY': '750fc5a8-75a5-4ef1-94f4-80017fafe472',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

const instancePhoto = axios.create({
    withCredentials: true,
    headers: {
        // 'API-KEY': '8d2e390a-6ddc-4d40-87d5-55b4df812b3f',
        'API-KEY': '616831a9-7452-4554-aa58-2d586af30e5f',
        // 'API-KEY': '750fc5a8-75a5-4ef1-94f4-80017fafe472',
        'Content-Type': 'multipart/form-data'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const API = {
    getUsers(pageSize: number = 10, currentPage: number = 1, user: string = '', bool: string | boolean = '') {
        return instance.get<GetUsersType>(`users?count=${pageSize}&page=${currentPage}&term=${user}&friend=${bool}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(id: number | null) {
        return instance.get<ProfileType>(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },

    getStatus(id: number | null) {
        return instance.get<string>(`profile/status/${id}`)
            .then(response => {
                return response.data
            })
    },

    putStatus(status: string) {
        return instance.put<string>(`profile/status`, {status})
    },
    putProfileInfo(data: ProfileType) {
        return instance.put<ProfileType>(`profile`, data)
    },

    getAuth() {
        return instance.get<ApiType<LoginType, ResultCodes>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    postLog(email: string, password: string | number, remember: boolean, captcha: string) {
        return instance.post<ApiType<{userId: number}, ResultCodes | ResultCodeCaptcha>>(`auth/login?email=${email}&password=${password}&rememberMe=${remember}&captcha=${captcha}`)
            .then(response => {
                return response
            })
    },
    postLogOut() {
        return instance.post<ApiType<{}, ResultCodes | ResultCodeCaptcha>>(`auth/logout`)
            .then(response => {
                return response
            })
    },
    getFollow(id: number) {
        return instance.get<boolean>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postFriendFollow(id: number) {
        return instance.post<ApiType<{}, ResultCodes | ResultCodeCaptcha>>(`follow/${id}`)
            .then(response => {
                return response
            })
    },
    postFriendUnFollow(id: number) {
        return instance.delete<ApiType<{}, ResultCodes | ResultCodeCaptcha>>(`follow/${id}`)
            .then(response => {
                return response
            })
    },
    postAvatarPhoto(formData: File) {
        return instancePhoto.post<ApiType<PhotosType, ResultCodes>>(`profile/photo`, formData)
            .then(response => {
                return response.data.data
            })
    },
    putNewDialog(id: number) {
        return instance.put<ApiType<{}, ResultCodes | ResultCodeCaptcha>>(`dialogs/${id}`)
            .then(response => {
                return response
            })
    },
    getDialogs() {
        return instance.get<Array<GetDialogsType>>(`dialogs`)
            .then(response => {
                return response.data
            })
    },
    postMessage(id: number, body: string) {
        return instance.post<PostMessageResponseType>(`dialogs/${id}/messages`, {body})
            .then(response => {
                return response
            })
    },
    deleteMessage(messageId: number) {
        return instance.delete<ApiType<{}, ResultCodes>>(`dialogs/messages/${messageId}`)
            .then(response => {
                return response
            })
    },
    getDialog(id: number) {
        return instance.get<GetMessagesType>(`dialogs/${id}/messages`)
            .then(response => {
                return response.data
            })
    },
    getCaptcha() {
        return instance.get<GetCaptcha>(`security/get-captcha-url`)
            .then(response => {
                return response.data.url
            })
    }
};



