export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    status: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    uniqueUrlName: string | null
}

export type FriendType = {
    id: number
    name: string
    followed: boolean
    avatar: string
}

export type DialogType = {
    Messages: Array<MessageType>
    hasNewMessages: boolean
    id: number
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
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

export type PostType = {
    id: number
    name: string
    text: string
    ava: string
    likes: number
}
