import React from "react";
import Person from "../../../../CssModules/UpperMenu/UpperMenu.module.css";
import * as axios from "axios";
import {API} from "../../../DataBases/API/API";


function LoginPage(props) {
    let refEmail = React.createRef();
    let refPassword = React.createRef();
    let refRemember = React.createRef();
    let currentTextEmail = () => {
        let text = refEmail.current.value
        props.changeEmail(text)
    }
    let currentTextPassword = () => {
        let text = refPassword.current.value
        props.changePassword(text)
    }
    let currentTextRemember = () => {
        let text = refRemember.current.checked
        props.changeRemember(text)
    }
    let request = () => {
        let email = refEmail.current.value;
        let password = refPassword.current.value;
        let remember = refRemember.current.checked
        props.postLogThunk(email, password, remember)
    };
    let buttonLoginClasses =
    `
    ${Person.log__padding}
    ${Person.log__button} 
    `;
    return (
        <div>
            <div>
                <div>
                    <input onChange={currentTextEmail} value={props.email} ref={refEmail} placeholder='Your email'/>
                </div>
                <div>
                    <input type='password' onChange={currentTextPassword} value={props.password} ref={refPassword}
                           placeholder='Your password'/>
                </div>
                <div>
                    <span>Remember me:</span>
                    <input onChange={currentTextRemember}
                           checked={props.remember}
                           ref={refRemember}
                           type='checkbox'
                           placeholder='Remember me'
                    />
                </div>
                <div>
                    <button disabled={props.buttonRequest}
                            onClick={request}
                            className={buttonLoginClasses}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}


export default LoginPage
