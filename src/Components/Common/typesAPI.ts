import {FriendType, LoginType, PhotosType, ProfileType, UserType} from "./types";


export type GetUsersType = {
    error: string | null
    items: Array<UserType>
    totalCount: number
}

export type ApiType<d, c> = {
    data: d
    resultCode: c
    messages: Array<string>
}

export type GetDialogsType = {
    hasNewMessages: boolean
    id: number
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagecount: number
    photos: PhotosType
    userName: string
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeCaptcha {
    Captcha = 10
}


