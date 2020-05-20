import {API} from "../API/API";
import {initializeApp} from "./ProfileInfoReducer";
import {stopSubmit} from "redux-form";
import {LoginType} from "../../Common/types";
import {AppStateType, InferActionsTypes} from "../Redux/Store";
import {ThunkAction} from "redux-thunk";

type ActionLoginTypes = InferActionsTypes<typeof actionsLogin>
export type ThunkLoginType = ThunkAction<Promise<void>, AppStateType, unknown, ActionLoginTypes>

export const actionsLogin = {
    logData: (id: number | null, login: string | null, email: string | null) => ({type: 'LoginReducer/logData', data: {id, login, email}} as const),
    buttonAction: (bool: boolean) => ({type: 'LoginReducer/buttonAction', bool} as const),
    loadProfileData: () => ({type: 'LoginReducer/loadProfileData'} as const),
    getCaptcha: (cap: string | null) => ({type: 'LoginReducer/getCaptcha', cap} as const)
}

export const postLogThunk = (email: string, password: number, remember: boolean, captcha: string): ThunkLoginType => {
    return async (dispatch) => {
        dispatch(actionsLogin.buttonAction(true))
        let response = await API.postLog(email, password, remember, captcha)
        if (response.data.resultCode === 0) {
            let data = await API.getAuth()
            await dispatch(initializeApp(data.data.id));
            dispatch(actionsLogin.logData(data.data.id, data.data.login, data.data.email));
        } else if (response.data.resultCode === 10) {
            let data = await API.getCaptcha()
            dispatch(actionsLogin.getCaptcha(data))
            dispatch(stopSubmit('asyncValidation', {_error: response.data.messages[0]}))
        } else {
            dispatch(stopSubmit('asyncValidation', {_error: response.data.messages[0]}))
        }
        dispatch(actionsLogin.buttonAction(false))
    }
};

export const postLogOutThunk = (): ThunkLoginType => {
    return async (dispatch) => {
        await API.postLogOut()
        dispatch(actionsLogin.logData(null, null, null));
        API.getAuth()
    }
};

let defaultStateLogin = {
    logData: {} as LoginType,
    isLogged: false,
    buttonRequest: false,
    loadProfileData: false,
    captcha: null as null | string
};

type DefaultStateLoginType = typeof defaultStateLogin

export function LoginInstructions(state = defaultStateLogin, action: ActionLoginTypes): DefaultStateLoginType {
    switch (action.type) {
        case "LoginReducer/getCaptcha":
            return {...state, captcha: action.cap}
        case "LoginReducer/buttonAction":
            return {...state, buttonRequest: action.bool}
        case "LoginReducer/logData":
            return {...state, logData: {...action.data}, isLogged: !!action.data.id}
        case "LoginReducer/loadProfileData":
            return {...state, loadProfileData: true}
        default:
            return state
    }
}
