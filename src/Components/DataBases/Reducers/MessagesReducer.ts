import React from "react";
import {API} from "../API/API";
import {switchIsFetching} from "./UserReducer";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'
import {ProfileType, UserType, DialogType} from "../../Common/types";


const ADD_MESSAGE = 'addMessage';
const UPDATE_TEXT_MESSAGE = 'updateTextMessage';
const DELETE_TEXT_MESSAGE = 'deleteMessage';
const DIALOG_CREATION = 'dialogCreation';
const GET_ALL_DIALOGS = 'getAllDialogs';
const GET_MESSAGES_WITH_USER = 'getMessagesWithUser';
const UPDATE_SEARCH_TEXT = 'updateSearchText';
export const messageCreation = (date: any, id: number) => ({type: ADD_MESSAGE, date, id});
export const updateMessageCreation = (text: string, id: number) => ({type: UPDATE_TEXT_MESSAGE, text, id});
export const deleteMessageCreation = (mesId: number, id: number) => ({type: DELETE_TEXT_MESSAGE, mesId, id});
export const dialogCreation = (data: any) => ({type: DIALOG_CREATION, data});
type GetAllDialogType = {
    type: typeof GET_ALL_DIALOGS
    data: Array<DialogType>
}
export const getAllDialogs = (data: Array<DialogType>): GetAllDialogType => ({type: GET_ALL_DIALOGS, data});
export const updateSearchText = (text: string) => ({type: UPDATE_SEARCH_TEXT, text});
export const getMessagesWithUser = (data: any, user: UserType, me: ProfileType) => ({type: GET_MESSAGES_WITH_USER, data, user, me});

export const putNewDialogThunk = (data: any) => {
    return async (dispatch: any) => {
        await API.putNewDialog(data.id)
        let response = await API.getDialogs()
        return dispatch(getAllDialogs(response));
    }
};

export const postMessageThunk = (id: number, message: string, me: ProfileType) => {
    return async (dispatch: any) => {
        await API.postMessage(id, message)
        return dispatch(getDialogThunk(id, me))
    }
};

export const deleteMessageThunk = (mesId: number, id: number) => {
    return async (dispatch: any) => {
        await API.deleteMessage(mesId)
        return dispatch(deleteMessageCreation(mesId, id))
    }
};

export const getUserAllMessagesThunk = (id: number, me: ProfileType) => async (dispatch: any) => {
    dispatch(switchIsFetching(true))
    await dispatch(getDialogThunk(id, me));
    return dispatch(switchIsFetching(false))
}

export const getDialogThunk = (id: number, me: ProfileType) => {
    return async (dispatch: any) => {
        let data = await API.getDialog(id)
        let response = await API.getProfile(id)
        return dispatch(getMessagesWithUser(data.items, response, me))
    }
};


let defaultStateMessage = {
    Dialogs: [] as Array<DialogType>,
    tempSearch: '',
    freshDialogs: 0
};

type DefaultStateMessageType = typeof defaultStateMessage

export function MessagesInstructions(state = defaultStateMessage, action: any): DefaultStateMessageType {
    let stateCopy = {
        ...state,
        Dialogs: [...state.Dialogs]
    };

    let getIndex = (id: number) => {
        let index = -Infinity;
        for (let i = 0; i < stateCopy.Dialogs.length; i++) {
            if (stateCopy.Dialogs[i].id === id) {
                index = i
            }
        }
        return index
    };

    switch (action.type) {
        case UPDATE_SEARCH_TEXT:
            return {...state, tempSearch: action.text}
        case UPDATE_TEXT_MESSAGE:
            stateCopy.Dialogs[action.id].Temp = action.text;
            return stateCopy;
        case GET_ALL_DIALOGS:
            let countUpdatingDialogs = 0;
            for (let i = 0; i < action.data.length; i++) {
                if (action.data[i].hasNewMessages) countUpdatingDialogs++;
                if (!action.data[i].photos.large) action.data[i].photos.large= action.data[i].photos.small = emptyPhoto
                action.data[i].Messages = []
            }
            return {...state, Dialogs: [...action.data], freshDialogs: countUpdatingDialogs}
        case GET_MESSAGES_WITH_USER:
            let user: number = getIndex(action.user.userId)
            stateCopy.Dialogs[user].Messages = action.data
            for (let i = 0; i < action.data.length; i++) {
                stateCopy.Dialogs[user].Messages[i].senderName =
                    action.data[i].senderId === action.me.userId ? action.me.fullName : action.user.fullName;

                stateCopy.Dialogs[user].Messages[i].Avatar =
                    action.data[i].senderId === action.me.userId ? action.me.photos.large : action.user.photos.large || emptyPhoto;
            }
            return stateCopy;
        case DELETE_TEXT_MESSAGE:
            let dialogIndex: number = getIndex(action.id);
            for (let i = 0; i < stateCopy.Dialogs[dialogIndex].Messages.length; i++) {
                if (stateCopy.Dialogs[dialogIndex].Messages[i].id === action.mesId) {
                    stateCopy.Dialogs[dialogIndex].Messages.splice(i, 1)
                }
            }
            return stateCopy;
        default:
            return state
    }
}

