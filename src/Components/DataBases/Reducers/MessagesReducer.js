import React from "react";
import Pendalf from "../../../img/Avatars/pendalf.jpg";
import Senya from "../../../img/Avatars/senya.jpg";
import Goliy from "../../../img/Avatars/goliy.jpg";
import Agronom from "../../../img/Avatars/Agronom.jpg";
import Sarumyan from "../../../img/Avatars/sarumyan.jpg";
import Dialogs from "../../Dialog/MainDialogPage/Dialogs";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'
import {API} from "../API/API";

const ADD_MESSAGE = 'addMessage';
const UPDATE_TEXT_MESSAGE = 'updateTextMessage';
const DELETE_TEXT_MESSAGE = 'deleteMessage';
const DIALOG_CREATION = 'dialogCreation';
export const messageCreation = (date, id) => ({type: ADD_MESSAGE, date, id});
export const updateMessageCreation = (text, id) => ({type: UPDATE_TEXT_MESSAGE, text, id});
export const deleteMessageCreation = (id, mesId) => ({type: DELETE_TEXT_MESSAGE, id, mesId});
export const dialogCreation = data => ({type: DIALOG_CREATION, data});

export const putNewDialogThunk = data => {
    return dispatch => {
        debugger
        return API.putNewDialog(data.id)
            .then( () => {
                debugger
                return dispatch(dialogCreation(data));
            })
    }
};


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
        {
            id: 2,
            Name: "Goliy",
            LastName: 'Shmiga',
            Avatar: Goliy,
            Temp: '',
            Messages: [
                {
                    id: 0,
                    Who: 'Goliy',
                    Avatar: Goliy,
                    Data: '25:00:00',
                    Message: 'Omg im burned'
                }
            ]
        },
        {
            id: 3,
            Name: "Agronom",
            LastName: 'Bomj',
            Avatar: Agronom,
            Temp: '',
            Messages: [
                {
                    id: 0,
                    Who: 'Agronom',
                    Avatar: Agronom,
                    Data: '25:00:00',
                    Message: 'im king lol'
                }
            ]
        }
    ],
};

export function MessagesInstructions(state = defaultStateMessage, action) {
    // debugger
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
