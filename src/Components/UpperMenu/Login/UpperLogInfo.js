import React from "react";
import Person from '../../../CssModules/UpperMenu/UpperMenu.module.css'
import Content from '../../../CssModules/content.module.css'
import {NavLink} from "react-router-dom";


function UpperLogInfo(props) {
    // debugger
    return (
        <div className={Person.log_display__flex}>
            <div className={`${Person.log__margin} `}>
                {props.didLog ? <img className={`
            ${Person.log_img} 
            ${Person.log__padding}
            `} src={props.Avatar}
                    />
                    :
                    <NavLink to='/login'>
                        <button className={`
            ${Person.log__margin} 
            ${Person.log__padding}
            ${Person.log__button} 
            ${Person.log__buttonWidth}
            `}>
                            Login
                        </button>
                    </NavLink>}
            </div>
        </div>


    )

}


export default UpperLogInfo
