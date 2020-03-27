import React from "react";
import Person from "../../../../CssModules/UpperMenu/UpperMenu.module.css";
import * as axios from "axios";


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
        axios
            .post(`https://social-network.samuraijs.com/api/1.0/auth/login?email=${email}&password=${password}&rememberMe=${remember}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': '42e7eb43-bd21-414d-a069-9584e7654f6a'
                }

            })
            .then(response => {
                debugger
                return response.status

            })
            .then(response => {
                alert(response)
                if (response === 200){

                    return axios
                        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '42e7eb43-bd21-414d-a069-9584e7654f6a'
                            }

                        })
                        .then(responseData => {
                            props.logData(responseData.data.data.id, responseData.data.data.login, responseData.data.data.email);
                            props.loginRequest(email, password, remember)
                            debugger
                        })
                }
            })

    }


    return(
        <div>
            <div>
                <div>
                    <input onChange={currentTextEmail} value={props.email} ref={refEmail} placeholder='Your email'/>
                </div>
                <div>
                    <input onChange={currentTextPassword} value={props.password} ref={refPassword} placeholder='Your password'/>
                </div>
                <div>
                    <span>Remember me:</span>
                    <input onChange={currentTextRemember} value={props.remember} ref={refRemember} type='checkbox' placeholder='Remember me'/>
                </div>
                <div>
                    <button onClick={request} className={`
            ${Person.log__padding}
            ${Person.log__button} 
            `}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}


export default LoginPage
