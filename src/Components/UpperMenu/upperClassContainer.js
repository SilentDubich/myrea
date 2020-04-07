import React from "react";
import * as axios from "axios";
import UpMenu from "../../CssModules/UpperMenu/UpperMenu.module.css";
import {UpperLogInfoContainer} from "./Login/UpperLogInfoContainer";
import {API} from "../DataBases/API/API";
import {Redirect} from "react-router-dom";


class UpperClassContainer extends React.Component {

    // componentDidMount() {
    //     API.getAuth()
    //         .then(data => {
    //             this.props.logData(data.data.id, data.data.login, data.data.email);
    //             return data.data.id
    //             // debugger
    //         })
    //         .then( (data) => {
    //             this.props.getMyProfileThunk(data);
    //             this.props.getStatusThunk(data);
    //         })
    //
    // }

    render() {

        return (
            <div className={`${UpMenu.container__menu}`}>
                <UpperLogInfoContainer/>
            </div>
        )
    }
}

export default UpperClassContainer