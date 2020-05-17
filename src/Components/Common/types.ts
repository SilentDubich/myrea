export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    status: string
    contacts: ContactsType
    photos: PhotosType
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    uniqueUrlName: string
}

export type FriendType = {
    id: number
    name: string
    followed: boolean
    avatar: string
}

export type DialogType = {
    Messages: Array<MessageType>
    hasNewMessage: boolean
    id: number
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagecount: number
    photos: PhotosType
    userName: string
    Temp: string
}

export type MessageType = {
    Avatar: string
    addedAt: string
    body: string
    id: number
    recipientId: number
    senderId: number
    senderName: string
    translatedBody: string | null
    viewed: boolean
}

export type LoginType = {
    id: number | null
    login: string | null
    email: string | null
}
