import React from "react";
import {API} from "../API/API";
import {actionsUser} from "./UserReducer";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'
import {ProfileType, UserType, DialogType} from "../../Common/types";
import {AppStateType, InferActionsTypes} from "../Redux/Store";
import {ThunkAction} from "redux-thunk";
import {actionsProfile} from "./ProfileInfoReducer";
import {GetDialogsType} from "../../Common/typesAPI";


type ActionMessageType = InferActionsTypes<typeof actionsMessages>
type ThunkMessageType = ThunkAction<Promise<void>, AppStateType, unknown, ActionMessageType>

export const actionsMessages = {
    updateMessageCreation: (text: string, id: number) => ({type: 'MessageReducer/updateTextMessage', text, id} as const),
    deleteMessageCreation: (mesId: number, id: number) => ({type: 'MessageReducer/deleteMessage', mesId, id} as const),
    getAllDialogs: (data: Array<GetDialogsType>) => ({type: 'MessageReducer/getAllDialogs', data} as const),
    updateSearchText: (text: string) => ({type: 'MessageReducer/updateSearchText', text} as const),
    getMessagesWithUser: (data: any, user: ProfileType, me: ProfileType) => ({type: 'MessageReducer/getMessagesWithUser', data, user, me} as const)
}


export const putNewDialogThunk = (id: number): ThunkMessageType => {
    return async (dispatch) => {
        await API.putNewDialog(id)
        let response = await API.getDialogs()
        dispatch(actionsMessages.getAllDialogs(response));
    }
};

export const postMessageThunk = (id: number, message: string, me: ProfileType): ThunkMessageType => {
    return async (dispatch) => {
        await API.postMessage(id, message)
        await dispatch(getDialogThunk(id, me))
    }
};

export const deleteMessageThunk = (mesId: number, id: number): ThunkMessageType => {
    return async (dispatch) => {
        await API.deleteMessage(mesId)
        dispatch(actionsMessages.deleteMessageCreation(mesId, id))
    }
};

export const getUserAllMessagesThunk = (id: number, me: ProfileType) => async (dispatch: any) => {
    dispatch(actionsUser.switchIsFetching(true))
    await dispatch(getDialogThunk(id, me));
    dispatch(actionsUser.switchIsFetching(false))
}

export const getDialogThunk = (id: number, me: ProfileType): ThunkMessageType => {
    return async (dispatch) => {
        let data = await API.getDialog(id)
        let response = await API.getProfile(id)
        dispatch(actionsMessages.getMessagesWithUser(data.items, response, me))
    }
};


let defaultStateMessage = {
    Dialogs: [] as Array<DialogType>,
    tempSearch: '',
    freshDialogs: 0
};

type DefaultStateMessageType = typeof defaultStateMessage

export function MessagesInstructions(state = defaultStateMessage, action: ActionMessageType): DefaultStateMessageType {
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
        case "MessageReducer/updateSearchText":
            return {...state, tempSearch: action.text}
        case "MessageReducer/updateTextMessage":
            stateCopy.Dialogs[action.id].Temp = action.text;
            return stateCopy;
        case "MessageReducer/getAllDialogs":
            let countUpdatingDialogs = 0;
            for (let i = 0; i < action.data.length; i++) {
                if (action.data[i].hasNewMessages) countUpdatingDialogs++;
                if (!action.data[i].photos.large) action.data[i].photos.large= action.data[i].photos.small = emptyPhoto
                // @ts-ignore
                action.data[i].Messages = []
            }
            // @ts-ignore
            return {...state, Dialogs: [...action.data], freshDialogs: countUpdatingDialogs}
        case "MessageReducer/getMessagesWithUser":
            let user: number = getIndex(action.user.userId)
            stateCopy.Dialogs[user].Messages = action.data
            for (let i = 0; i < action.data.length; i++) {
                stateCopy.Dialogs[user].Messages[i].senderName =
                    action.data[i].senderId === action.me.userId ? action.me.fullName : action.user.fullName;

                stateCopy.Dialogs[user].Messages[i].Avatar =
                    action.data[i].senderId === action.me.userId ? action.me.photos.large : action.user.photos.large || emptyPhoto;
            }
            return stateCopy;
        case "MessageReducer/deleteMessage":
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

