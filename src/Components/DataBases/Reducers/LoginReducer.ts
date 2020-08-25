import {API} from "../API/API";
import {initializeApp} from "./ProfileInfoReducer";
import {stopSubmit} from "redux-form";
import {LoginType} from "../../Common/types";
import {AppStateType, InferActionsTypes} from "../Redux/Store";
import {ThunkAction} from "redux-thunk";
import {ResultCodeCaptcha, ResultCodes} from "../../Common/typesAPI";
type ActionLoginTypes = InferActionsTypes<typeof actionsLogin>
export type ThunkLoginType = ThunkAction<Promise<void>, AppStateType, unknown, ActionLoginTypes>

export const actionsLogin = {
    logData: (id: number | null, login: string | null, email: string | null) => ({type: 'LoginReducer/logData', data: {id, login, email}} as const),
    buttonAction: (bool: boolean) => ({type: 'LoginReducer/buttonAction', bool} as const),
    loadProfileData: () => ({type: 'LoginReducer/loadProfileData'} as const),
    getCaptcha: (cap: string | null) => ({type: 'LoginReducer/getCaptcha', cap} as const)
}

export const postLogThunk = (email: string, password: string, remember: boolean, captcha: string): ThunkLoginType => {
    return async (dispatch) => {
        debugger
        dispatch(actionsLogin.buttonAction(true))
        let response = await API.postLog(email, password, remember, captcha)
        if (response.data.resultCode === ResultCodes.Success) {
            let data = await API.getAuth()
            await dispatch(initializeApp(response.data.data.userId));
            dispatch(actionsLogin.logData(data.data.id, data.data.login, data.data.email));
        } else if (response.data.resultCode === ResultCodeCaptcha.Captcha) {
            let data = await API.getCaptcha()
            dispatch(actionsLogin.getCaptcha(data))
            dispatch(stopSubmit('asyncValidation', {_error: response.data.messages[0]}))
        } else if (response.data.resultCode === ResultCodes.Error) {
            dispatch(stopSubmit('asyncValidation', {_error: response.data.messages[0]}))
        }
        dispatch(actionsLogin.buttonAction(false))
    }
};

export const postLogOutThunk = (): ThunkLoginType => {
    return async (dispatch) => {
        await API.postLogOut()
        dispatch(actionsLogin.logData(null, null, null));
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
