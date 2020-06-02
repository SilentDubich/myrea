import React, {FC} from "react";
import Friends from '../../../../CssModules/Friends/Friends.module.css'
import Dialog from "../../../../CssModules/Dialog/DialogFriend.module.css";

type mapStateToPropsType = {
    tempSearch: string
}

type mapDispatchType = {
    getUsersThunk: (pageSize: number, currentPage: number, user?: string) => void
    updateSearchText: (text: string) => void
}

type PropsType = mapStateToPropsType & mapDispatchType

export const UserSearch:FC<PropsType> = (props) => {
    let text = React.createRef<HTMLInputElement>()
    let search = (event: any) => {
        if (text.current){
            if (event.which === 13){
                let searchRequest = text.current.value;
                props.getUsersThunk(1, 1, searchRequest);
                event.preventDefault()
            }
        }
    }

    let updateSearchField = () => {
        if (text.current) {
            let tempText = text.current.value
            props.updateSearchText(tempText)
        }
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
