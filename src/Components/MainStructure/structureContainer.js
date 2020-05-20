import React, {useEffect} from "react";
import {actionsLogin} from "../DataBases/Reducers/LoginReducer";
import {initializeApp} from "../DataBases/Reducers/ProfileInfoReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import MacketApp from "./Structure";
import Preloader from "../Common/Preloader";
import {actionsMessages} from "../DataBases/Reducers/MessagesReducer";
import {API} from "../DataBases/API/API";
import {withRouter} from "react-router-dom";


function MacketAppClass(props) {
     useEffect(  () => {
         (async () => {
             let data = await API.getAuth()
             props.logData(data.data.id, data.data.login, data.data.email);
             props.initializeApp(data.data.id)
         })()
    }, [])
    if (props.isLogged && !props.initializate) return <Preloader/>
    return (
        <div>
            {props.initializate && <MacketApp {...props}/>}
        </div>
    )
}


let mapStateToProps = state => {
    return {
        initializate: state.loginReducer.loadProfileData,
        isLogged: state.loginReducer.isLogged,
        isFetching: state.usersReducer.isFetching
    }
}

const logData = actionsLogin.logData
const getAllDialogs = actionsMessages.getAllDialogs

export const MacketAppContainer = compose(
    connect(mapStateToProps, {
        logData,
        initializeApp,
        getAllDialogs,
    }),
    withRouter
)(MacketAppClass)





