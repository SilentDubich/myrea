import React, {FC} from "react";
import {CreateFieldForm} from "../../../Common/createFieldForm";
import {renderField} from "../../../Validations/LoginValidate/loginAsyncForm";
import settingsS from "../../../../CssModules/Settings/settingsStyles.module.css";
import loginS from "../../../../CssModules/Login/loginStyles.module.css"

type PropsType = {
    captcha: string | null
}

export const CaptchaField:FC<PropsType> = (props) => {
    const containerClasses = `${loginS.captcha_container__block}`
    const captchaImgClasses = `${loginS.captcha_img__decor}`
    const inputClasses = `${settingsS.settings_input__decor} ${settingsS.settings_input__padding} ${settingsS.settings_input__margins}`
    const blockClasses = `${loginS.captcha_block__margin}`
    return (
        <div className={containerClasses}>
            <div className={blockClasses}>
                {props.captcha && <img className={captchaImgClasses} src={props.captcha}/>}
            </div>
            <div className={blockClasses}>
                <div className={`${inputClasses}`}>
                    {props.captcha && CreateFieldForm<'captcha'>('captcha', 'text', renderField('input'), 'Captcha')}
                </div>
            </div>
        </div>
    )
}