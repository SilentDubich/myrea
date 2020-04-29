import React from "react";
import Person from '../../../CssModules/UpperMenu/UpperMenu.module.css'
import Content from '../../../CssModules/content.module.css'
import {NavLink} from "react-router-dom";


function UpperLogInfo(props) {
    let loginButtonClasses = `
    ${Person.log__margin} 
    ${Person.log__padding}
    ${Person.log__button} 
    ${Person.log__buttonWidth}
    `;

    let imgClasses = `
    ${Person.log_img} 
    ${Person.log__padding}
    ${Person.log_img__cursorPointer}
    `;

    let logOut = () => {
        props.postLogOutThunk()
    }
    return (
        <div className={Person.log_display__flex}>
            <div className={`${Person.log__margin} `}>
                {
                    props.didLog ?
                        <img
                            className={imgClasses}
                            src={props.Avatar}
                            onClick={logOut}
                        />
                        :
                        <NavLink to='/login'>
                            <button className={loginButtonClasses}>
                                Login
                            </button>
                        </NavLink>
                }
            </div>
        </div>


    )

}


export default UpperLogInfo
