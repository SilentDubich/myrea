import {API} from "../API/API";
import {loadProfileData} from "./LoginReducer";
import {switchIsFetching} from "./UserReducer";
import {getAllDialogs} from "./MessagesReducer";
import {loadFriends} from "./FriendsReducer";
import {ProfileType} from "../../Common/types";

const GET_PROFILE = 'getProfile';
export const getProfile = (user: ProfileType, who: string) => ({type: GET_PROFILE, user, who});
const SET_PROFILE = 'setProfile';
export const setProfile = (bool: boolean) => ({type: SET_PROFILE, bool});
const GET_FOLLOW = 'follow';
export const getFollow = (boolean: boolean) => ({type: GET_FOLLOW, boolean});
const GET_STATUS = 'getStatus';
export const getStatus = (status: string) => ({type: GET_STATUS, status});


const getProfileInfo = (id: number, who: string) => {
    return async (dispatch: any) => {
        let data = await API.getProfile(id)
        await dispatch(getProfile(data, who));
        await dispatch(getStatusThunk(id))
    }
}


export const getProfileThunk = (id: number, who: string) => {
    return async (dispatch: any) => {
        await dispatch(getProfileInfo(id, who))
        let responseFollow = await API.getFollow(id)
        return dispatch(getFollow(responseFollow))
    }
};

export const getMyProfileThunk = (id: number, who: string) => {
    return async (dispatch: any) => {
        await dispatch(getProfileInfo(id, who))
        // @ts-ignore
        let friends = await API.getUsers(100,1,'',true)
        dispatch(loadFriends(friends.items))
        let response = await API.getDialogs()
        return dispatch(getAllDialogs(response))
    }
};


export const setAnotherProfile = (id: number, who: string) => async (dispatch: any) => {
    let checkWho = who === 'me'
    dispatch(switchIsFetching(true))
    dispatch(setProfile(checkWho))
    checkWho ? await dispatch(getMyProfileThunk(id, who)) : await dispatch(getProfileThunk(id, who));
    dispatch(switchIsFetching(false))
}

export const initializeApp = (id: number) => async (dispatch: any) => {
    try {
        await dispatch(getMyProfileThunk(id, 'me'));
        return dispatch(loadProfileData());
    } finally {
        return dispatch(loadProfileData());
    }
}

export const getStatusThunk = (id: number) => {
    return async (dispatch: any) => {
        let data = await API.getStatus(id)
        return dispatch(getStatus(data));
    }
};

export const putStatusThunk = (status: string) => {
    return async (dispatch: any) => {
        await API.putStatus(status)
        return dispatch(getStatus(status));
    }
};


export const putProfileInfoThunk = (data: any, id: number) => {
    return async (dispatch: any) => {
        await API.putProfileInfo(data)
        debugger
        let response = await API.getProfile(id)
        dispatch(getProfile(response, 'me'));
        dispatch(setProfile(true))
    }
};


export const postProfilePhotoThunk = (formData: any, id: number) => {
    return async (dispatch: any) => {
        await API.postAvatarPhoto(formData)
        let data = await API.getProfile(id)
        dispatch(getProfile(data, 'me'));
        dispatch(setProfile(true))
    }
};

let defaultStateProfile = {
    logged: {} as ProfileType,
    currentProfile: {} as ProfileType,
    followed: null,
    myProfile: true,
};

type DefaultStateProfileType = typeof defaultStateProfile

export function ProfileInstructions(state = defaultStateProfile, action: any): DefaultStateProfileType {
    let stateCopy = {
        ...state,
    }
    switch (action.type) {
        case GET_PROFILE:
            action.who === 'me' ? stateCopy.logged = action.user : stateCopy.currentProfile = action.user
            stateCopy.logged.status = state.logged.status
            return stateCopy;
        case SET_PROFILE:
            return {...state, myProfile: action.bool};
        case GET_STATUS:
            stateCopy.myProfile ? stateCopy.logged.status = action.status : stateCopy.currentProfile.status = action.status
            return stateCopy
        case GET_FOLLOW:
            stateCopy.followed = action.boolean
            return stateCopy
        default:
            return state

    }
}
