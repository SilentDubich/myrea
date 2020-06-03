import React, {FC, useEffect} from "react";
import {actionsLogin} from "../DataBases/Reducers/LoginReducer";
import {initializeApp} from "../DataBases/Reducers/ProfileInfoReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import MacketApp from "./Structure";
import Preloader from "../Common/Preloader";
import {actionsMessages} from "../DataBases/Reducers/MessagesReducer";
import {API} from "../DataBases/API/API";
import {withRouter} from "react-router-dom";
import {AppStateType} from "../DataBases/Redux/Store";

type mapStatePropsType = {
    initializate: boolean
    isLogged: boolean
    isFetching: boolean
}

type mapDispatchType = {
    logData: (id: number | null, login: string | null, email: string | null) => void
    initializeApp: (id: number | null) => void
}

type PropsType = mapStatePropsType & mapDispatchType

const MacketAppClass:FC<PropsType> = (props) => {
    useEffect(() => {
        (async () => {
            let data = await API.getAuth()
            props.logData(data.data.id, data.data.login, data.data.email);
            props.initializeApp(data.data.id)
        })()
    }, [])
    if (props.isLogged && !props.initializate) return <Preloader/>
    return (
        <div>
            {props.initializate && <MacketApp/>}
        </div>
    )
}


let mapStateToProps = (state: AppStateType) => {
    return {
        initializate: state.loginReducer.loadProfileData,
        isLogged: state.loginReducer.isLogged,
        isFetching: state.usersReducer.isFetching
    }
}

const logData = actionsLogin.logData

export const MacketAppContainer = compose(
    connect(mapStateToProps, {
        logData,
        initializeApp
    }),
    withRouter
)(MacketAppClass)





