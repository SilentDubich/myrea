import {API} from "../API/API";
import {actionsLogin, ThunkLoginType} from "./LoginReducer";
import {actionsUser} from "./UserReducer";
import {actionsMessages} from "./MessagesReducer";
import {actionsFriends, ThunkFriendsType} from "./FriendsReducer";
import {PhotosType, ProfileType} from "../../Common/types";
import {AppStateType, InferActionsTypes} from "../Redux/Store";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";


type ActionProfileType = InferActionsTypes<typeof actionsProfile>
type ThunkProfileType = ThunkAction<Promise<void>, AppStateType, unknown, ActionProfileType>
export const actionsProfile = {
    getProfile: (user: ProfileType, who: string) => ({type: 'ProfileReducer/getProfile', user, who} as const),
    setProfile: (bool: boolean) => ({type: 'ProfileReducer/setProfile', bool} as const),
    getFollow: (boolean: boolean) => ({type: 'ProfileReducer/getFollow', boolean} as const),
    getStatus: (status: string) => ({type: 'ProfileReducer/getStatus', status} as const)
}



const getProfileInfo = (id: number, who: string): ThunkProfileType => {
    return async (dispatch) => {
        let data = await API.getProfile(id)
        await dispatch(actionsProfile.getProfile(data, who));
        await dispatch(getStatusThunk(id))

    }
}


export const getProfileThunk = (id: number, who: string): ThunkProfileType => {
    return async (dispatch) => {
        await dispatch(getProfileInfo(id, who))
        let responseFollow = await API.getFollow(id)
        dispatch(actionsProfile.getFollow(responseFollow))
    }
};

export const getMyProfileThunk = (id: number, who: string): ThunkProfileType => {
    return async (dispatch: any) => {
        await dispatch(getProfileInfo(id, who))
        // @ts-ignore
        let friends = await API.getUsers(100,1,'',true)
        dispatch(actionsFriends.loadFriends(friends.items))
        let response = await API.getDialogs()
        dispatch(actionsMessages.getAllDialogs(response))
    }
};


export const setAnotherProfile = (id: number, who: string): ThunkProfileType => async (dispatch: any) => {
    let checkWho = who === 'me'
    dispatch(actionsUser.switchIsFetching(true))
    dispatch(actionsProfile.setProfile(checkWho))
    checkWho ? await dispatch(getMyProfileThunk(id, who)) : await dispatch(getProfileThunk(id, who));
    dispatch(actionsUser.switchIsFetching(false))
}

export const initializeApp = (id: number): ThunkLoginType => async (dispatch) => {
    try {
        await dispatch(getMyProfileThunk(id, 'me'));
        dispatch(actionsLogin.loadProfileData());
    } finally {
        dispatch(actionsLogin.loadProfileData());
    }
}

export const getStatusThunk = (id: number): ThunkProfileType => {
    return async (dispatch) => {
        let data = await API.getStatus(id)
        dispatch(actionsProfile.getStatus(data));
    }
};

export const putStatusThunk = (status: string): ThunkProfileType => {
    return async (dispatch) => {
        await API.putStatus(status)
        dispatch(actionsProfile.getStatus(status));
    }
};


export const putProfileInfoThunk = (data: any, id: number): ThunkProfileType => {
    return async (dispatch) => {
        await API.putProfileInfo(data)
        let response = await API.getProfile(id)
        dispatch(actionsProfile.getProfile(response, 'me'));
        dispatch(actionsProfile.setProfile(true))
    }
};


export const postProfilePhotoThunk = (formData: any, id: number): ThunkProfileType => {
    return async (dispatch) => {
        await API.postAvatarPhoto(formData)
        let data = await API.getProfile(id)
        dispatch(actionsProfile.getProfile(data, 'me'));
        dispatch(actionsProfile.setProfile(true))
    }
};

let defaultStateProfile = {
    logged: {
        photos: {} as PhotosType
    } as ProfileType,
    currentProfile: {} as ProfileType,
    followed: null as boolean | null,
    myProfile: true,
};

type DefaultStateProfileType = typeof defaultStateProfile

export function ProfileInstructions(state = defaultStateProfile, action: ActionProfileType): DefaultStateProfileType {
    let stateCopy = {
        ...state,
    }
    switch (action.type) {
        case "ProfileReducer/getProfile":
            action.who === 'me' ? stateCopy.logged = action.user : stateCopy.currentProfile = action.user
            stateCopy.logged.status = state.logged.status
            return stateCopy;
        case "ProfileReducer/setProfile":
            return {...state, myProfile: action.bool};
        case "ProfileReducer/getStatus":
            stateCopy.myProfile ? stateCopy.logged.status = action.status : stateCopy.currentProfile.status = action.status
            return stateCopy
        case "ProfileReducer/getFollow":
            stateCopy.followed = action.boolean
            return stateCopy
        default:
            return state

    }
}
