import React, {useEffect} from "react";
import {loadProfileData, logData} from "../DataBases/Reducers/LoginReducer";
import {getMyProfileThunk, initializeApp} from "../DataBases/Reducers/ProfileInfoReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import MacketApp from "./Structure";
import Preloader from "../Common/Preloader";
import {getAllDialogs, getDialogThunk} from "../DataBases/Reducers/MessagesReducer";
import {API} from "../DataBases/API/API";


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
            <MacketApp/>
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

export const MacketAppContainer = compose(
    connect(mapStateToProps, {
        logData,
        initializeApp,
        getAllDialogs,
    })
)(MacketAppClass)





