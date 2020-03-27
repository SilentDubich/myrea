import React from "react";
import * as axios from "axios";
import UpMenu from "../../CssModules/UpperMenu/UpperMenu.module.css";
import {UpperLogInfoContainer} from "./Login/UpperLogInfoContainer";


class UpperClassContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                this.props.logData(response.data.data.id, response.data.data.login, response.data.data.email);
                debugger
            })

    }

    render() {
        return (
            <div>
                <div className={`${UpMenu.container__menu}`}>
                    <div>
                        <UpperLogInfoContainer/>
                    </div>
                </div>

            </div>
        )
    }
}

export default UpperClassContainer
