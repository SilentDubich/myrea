import React from "react";
import Friends from '../../../../CssModules/Friends/Friends.module.css'
import Dialog from "../../../../CssModules/Dialog/DialogFriend.module.css";


function UserSearch(props) {
    return(
        <div className={Friends.container__displayFlex}>
            <input placeholder='Search user...'
                   className={`${Dialog.input__width} ${Dialog.input__decor} ${Dialog.input__padding}`}
            />
        </div>
    )
}

export default UserSearch
