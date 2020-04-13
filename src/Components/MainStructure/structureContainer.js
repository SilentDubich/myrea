import React from "react";
import {API} from "../DataBases/API/API";
import {loadProfileData, logData} from "../DataBases/Reducers/LoginReducer";
import {
    getMyProfileThunk,
    getStatusThunk,
    initializeApp
} from "../DataBases/Reducers/ProfileInfoReducer";
import {store} from "../DataBases/Redux/Store";
import {compose} from "redux";
import {connect} from "react-redux";
import MacketApp from "./Structure";
import Preloader from "../Pre-loaders/Preloader";
import {getAllDialogs, getDialogThunk} from "../DataBases/Reducers/MessagesReducer";


class MacketAppClass extends React.Component {
    componentDidMount() {
        API.getAuth()
            .then(data => {
                this.props.logData(data.data.id, data.data.login, data.data.email);
                // debugger
                API.getDialogs()
                    .then(response => {
                        this.props.getAllDialogs(response)
                        // debugger
                        return response
                    })

                return data.data.id
            })
            // .then(data => {
            //     debugger
            //     this.props.getDialogThunk(data)
            //     return data
            // })
            .then(data => {
                // debugger
                this.props.initializeApp(data)
            })
    }

    render() {
        if (this.props.isLogged && !this.props.initializate) return <Preloader/>
        return (
            <div>
                <MacketApp {...this.props}/>
            </div>

        )
    }
}


let mapStateToProps = state => {
    // debugger
    return {
        state: state,
        store: store,
        dispatch: store.dispatch.bind(store),
        initializate: state.loginReducer.loadProfileData,
        isLogged: state.loginReducer.isLogged,
        isFetching: state.usersReducer.isFetching
    }
}

export const MacketAppContainer = compose(
    connect(mapStateToProps, {
        loadProfileData,
        logData,
        getMyProfileThunk,
        getStatusThunk,
        initializeApp,
        getAllDialogs,
        getDialogThunk
    })
)(MacketAppClass)





