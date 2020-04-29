import React from "react";
import {API} from "../API/API";
import {switchIsFetching} from "./UserReducer";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'


const ADD_MESSAGE = 'addMessage';
const UPDATE_TEXT_MESSAGE = 'updateTextMessage';
const DELETE_TEXT_MESSAGE = 'deleteMessage';
const DIALOG_CREATION = 'dialogCreation';
const GET_ALL_DIALOGS = 'getAllDialogs';
const GET_MESSAGES_WITH_USER = 'getMessagesWithUser';
const UPDATE_SEARCH_TEXT = 'updateSearchText';
export const messageCreation = (date, id) => ({type: ADD_MESSAGE, date, id});
export const updateMessageCreation = (text, id) => ({type: UPDATE_TEXT_MESSAGE, text, id});
export const deleteMessageCreation = (mesId, id) => ({type: DELETE_TEXT_MESSAGE, mesId, id});
export const dialogCreation = data => ({type: DIALOG_CREATION, data});
export const getAllDialogs = data => ({type: GET_ALL_DIALOGS, data});
export const updateSearchText = text => ({type: UPDATE_SEARCH_TEXT, text});
export const getMessagesWithUser = (data, user, me) => ({type: GET_MESSAGES_WITH_USER, data, user, me});

export const putNewDialogThunk = data => {
    return async dispatch => {
        await API.putNewDialog(data.id)
        let response = await API.getDialogs()
        return dispatch(getAllDialogs(response));
    }
};

export const postMessageThunk = (id, message, me) => {
    return async dispatch => {
        await API.postMessage(id, message)
        return dispatch(getDialogThunk(id, me))
    }
};

export const deleteMessageThunk = (mesId, id) => {
    return async dispatch => {
        await API.deleteMessage(mesId)
        return dispatch(deleteMessageCreation(mesId, id))
    }
};

export const getUserAllMessagesThunk = (id, me) => async dispatch => {
    dispatch(switchIsFetching(true))
    await dispatch(getDialogThunk(id, me));
    return dispatch(switchIsFetching(false))
}

export const getDialogThunk = (id, me) => {
    return async dispatch => {
        let data = await API.getDialog(id)
        let response = await API.getProfile(id)
        return dispatch(getMessagesWithUser(data.items, response, me))
    }
};


let defaultStateMessage = {
    Dialogs: [],
    tempSearch: '',
    freshDialogs: 0
};

export function MessagesInstructions(state = defaultStateMessage, action) {
    let stateCopy = {
        ...state,
        Dialogs: [...state.Dialogs]
    };

    let getIndex = id => {
        let index;
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
            let user = getIndex(action.user.userId)
            stateCopy.Dialogs[user].Messages = action.data
            for (let i = 0; i < action.data.length; i++) {
                stateCopy.Dialogs[user].Messages[i].senderName =
                    action.data[i].senderId === action.me.userId ? action.me.fullName : action.user.fullName;

                stateCopy.Dialogs[user].Messages[i].Avatar =
                    action.data[i].senderId === action.me.userId ? action.me.photos.large : action.user.photos.large || emptyPhoto;
            }
            return stateCopy;
        case DELETE_TEXT_MESSAGE:
            let dialogIndex = getIndex(action.id);
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

