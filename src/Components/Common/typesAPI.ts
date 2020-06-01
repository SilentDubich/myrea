import {FriendType, LoginType, MessageType, PhotosType, ProfileType, UserType} from "./types";


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

export type PostMessageResponseType = {
    data: {
        message: {
            addedAt: string
            body: string
            deletedByRecipient: boolean
            deletedBySender: boolean
            distributionId: number | null
            id: string
            isSpam: boolean
            recipientId: number
            recipientName: string
            senderId: number
            senderName: string
            translatedBody: string | null
            viewed: boolean
        }
    }
    messages: Array<string>
    resultCode: ResultCodes
}

export type GetMessagesType = {
    items: Array<{
        addedAt: string
        body: string
        id: number
        recipientId: number
        senderId: number
        senderName: string
        translatedBody: string | null
        viewed: boolean
    }>
    error: string | null
    totalCount: number
}

export type GetCaptcha = {
    url: string
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeCaptcha {
    Captcha = 10
}


