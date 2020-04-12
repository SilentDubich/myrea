import React from "react";
import {API} from "../API/API";
import {switchIsFetching} from "./UserReducer";
import {getProfile, getProfileThunk} from "./ProfileInfoReducer";
import Pendalf from "../../../img/Avatars/pendalf.jpg";
import Senya from "../../../img/Avatars/senya.jpg";
import Sarumyan from "../../../img/Avatars/sarumyan.jpg";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'


const ADD_MESSAGE = 'addMessage';
const UPDATE_TEXT_MESSAGE = 'updateTextMessage';
const DELETE_TEXT_MESSAGE = 'deleteMessage';
const DIALOG_CREATION = 'dialogCreation';
const GET_ALL_DIALOGS = 'getAllDialogs';
const GET_MESSAGES_WITH_USER = 'getMessagesWithUser';
export const messageCreation = (date, id) => ({type: ADD_MESSAGE, date, id});
export const updateMessageCreation = (text, id) => ({type: UPDATE_TEXT_MESSAGE, text, id});
export const deleteMessageCreation = (id, mesId) => ({type: DELETE_TEXT_MESSAGE, id, mesId});
export const dialogCreation = data => ({type: DIALOG_CREATION, data});
export const getAllDialogs = data => ({type: GET_ALL_DIALOGS, data});
export const getMessagesWithUser = (data, user) => ({type: GET_MESSAGES_WITH_USER, data, user});

export const putNewDialogThunk = data => {
    return dispatch => {
        // debugger
        return API.putNewDialog(data.id)
            .then(() => {
                // debugger
                return dispatch(dialogCreation(data));
            })
    }
};
export const getDialogThunk = id => {
    return dispatch => {
        // debugger
        return API.getDialog(id)
            .then((data) => {
                // debugger
                return data.items;
            })
            .then(data => {
                return API.getProfile(id)
                    .then(response => {
                        // debugger
                        dispatch(getMessagesWithUser(data, response))
                    })
            })
    }
};
export const postMessageThunk = (id, message) => {
    return dispatch => {
        // debugger
        return API.postMessage(id, message)
            .then(() => {
                // debugger
                // return dispatch(dialogCreation(message));
            })
    }
};

export const getUserAllMessagesThunk = id => dispatch => {
    dispatch(switchIsFetching(true))
    let promise = dispatch(getDialogThunk(id));
    Promise.all([promise])
        .then(() => {
            // debugger
            dispatch(switchIsFetching(false))
        });
}


let defaultStateMessage = {
    ProfileInfo: {
        id: 0,
        Name: "Sarumyan",
        LastName: '',
        Status: '',
        Avatar: Sarumyan,
    },
    Dialogs: [
        {
            id: 0,
            Name: "Pendalf",
            LastName: 'Grey',
            Avatar: Pendalf,
            Temp: '',
            Messages: [
                {
                    id: 0,
                    Who: 'Pendalf',
                    Avatar: Pendalf,
                    Data: '25:00:00',
                    Message: 'Lol, Fedor did it)))0)'
                },
                {
                    id: 1,
                    Who: 'Pendalf',
                    Avatar: Pendalf,
                    Data: '25:00:00',
                    Message: 'U hear me?)'
                }
            ]
        },
        {
            id: 1,
            Name: "Senya",
            LastName: '',
            Avatar: Senya,
            Temp: '',
            Messages: [
                {
                    id: 0,
                    Who: 'Senya',
                    Avatar: Senya,
                    Data: '25:00:00',
                    Message: 'Ezzzzz'
                },
                {
                    id: 1,
                    Who: 'Senya',
                    Avatar: Senya,
                    Data: '25:00:00',
                    Message: 'Ezzzzz'
                }
            ]
        },

    ],
};

export function MessagesInstructions(state = defaultStateMessage, action) {
    debugger
    let stateCopy = {
        ...state,
        Dialogs: [...state.Dialogs]
    };
    switch (action.type) {
        case ADD_MESSAGE:
            let id = 0;
            if (state.Dialogs[action.id].Messages.length !== 0) {
                id = state
                    .Dialogs[action.id]
                    .Messages[state.Dialogs[action.id].Messages.length - 1]
                    .id + 1;
            }

            let createMessage = {
                id: id,
                Who: state.ProfileInfo.Name,
                Avatar: state.ProfileInfo.Avatar,
                Data: action.date,
                Message: state.Dialogs[action.id].Temp,
            };
            stateCopy.Dialogs[action.id].Messages.push(createMessage);
            stateCopy.Dialogs[action.id].Temp = '';
            return stateCopy

        case UPDATE_TEXT_MESSAGE:
            stateCopy.Dialogs[action.id].Temp = action.text;
            return stateCopy;
        case DIALOG_CREATION:
            // сделать проверку на наличие данного диалога
            let newDialog = {
                id: action.data.id,
                Name: action.data.name,
                LastName: '',
                Avatar: action.data.avatar || emptyPhoto,
                Temp: '',
                Messages: [
                    {
                        id: action.data.id,
                        Who: action.data.name,
                        Avatar: action.data.avatar || emptyPhoto,
                        Data: '',
                        Message: 'Write me anything'
                    }
                ]
            }
            stateCopy.Dialogs.push(newDialog)
            // debugger
            return stateCopy;
        case GET_ALL_DIALOGS:
            for (let i = 0; i < action.data.length; i++) {
                let gettedDialog = {
                    id: action.data[i].id,
                    Name: action.data[i].userName,
                    LastName: '',
                    Avatar: action.data[i].photos.large || emptyPhoto,
                    Temp: '',
                    Messages: [
                        {
                            id: action.data[i].id,
                            Who: action.data[i].userName,
                            Avatar: action.data[i].photos.large || emptyPhoto,
                            Data: '',
                            Message: 'Write me anything'
                        }
                    ]
                }
                stateCopy.Dialogs.push(gettedDialog)
            }
            // debugger
            return stateCopy;
        case GET_MESSAGES_WITH_USER:
            let index;
            let messages = [];
            for (let i = 0; i < stateCopy.Dialogs.length; i++) {
                if (stateCopy.Dialogs[i].id === action.user.userId) {
                    index = i
                    debugger
                }
            }
            for (let i = 0; i < action.data.length; i++) {
                let gettedDialog =
                    {
                        id: action.data[i].id,
                        Who: action.data[i].senderName,
                        Avatar: action.data.avatar || emptyPhoto,
                        Data: action.data[i].addedAt,
                        Message: action.data[i].body
                    }
                debugger
                // stateCopy.Dialogs[index].Messages.push(gettedDialog)
                messages.push(gettedDialog)
            }
            stateCopy.Dialogs[index].Messages = messages
            debugger
            return stateCopy;
        case DELETE_TEXT_MESSAGE:
            for (let i = 0; i < stateCopy.Dialogs[action.id].Messages.length; i++) {
                if (stateCopy.Dialogs[action.id].Messages[i].id === action.mesId) {
                    stateCopy.Dialogs[action.id].Messages.splice(i, 1)
                }
            }
            if (stateCopy.Dialogs[action.id].Messages.length === 0) {
                stateCopy.Dialogs.splice(action.id, 1);
                for (let i = action.id; i < stateCopy.Dialogs.length; i++) {
                    stateCopy.Dialogs[i].id--
                }
            }
            return stateCopy;
        default:
            return state
    }
}
