import React from "react";
import Friends from '../../../../CssModules/Friends/Friends.module.css'
import Dialog from "../../../../CssModules/Dialog/DialogFriend.module.css";


function UserSearch(props) {
    let text = React.createRef()
    let search = event => {
        let searchRequest = text.current.value;
        if (text){
            if (event.which === 13){
                props.getUsersThunk(1, 1, searchRequest);
                event.preventDefault()
            }
        }
    }

    let updateSearchField = () => {
        let tempText = text.current.value
        props.updateSearchText(tempText)

    }
    return(
        <div className={Friends.container__displayFlex}>
            <input placeholder='Search user...'
                   className={`${Dialog.input__width} ${Dialog.input__decor} ${Dialog.input__padding}`}
                   ref={text}
                   onChange={updateSearchField}
                   onKeyPress={search}
                   value={props.tempSearch}
            />
        </div>
    )
}

export default UserSearch
