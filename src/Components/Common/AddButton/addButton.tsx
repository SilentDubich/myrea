import React, {FC, useEffect, useState} from "react";
import Content from "../../../CssModules/content.module.css";
import {API} from "../../DataBases/API/API";
import {addUserThunk, DefaultStateType} from "../../DataBases/Reducers/UserReducer";

type mapStateToPropsType = {
    state: DefaultStateType
    addButton: boolean
    isFetching: boolean

}

type propsFromAnotherComponentType = {
    id: number
    followed: boolean
    name: string
    avatar: string
}

type mapDispatchType = {
    addUserThunk: (id: number, name: string, avatar: string) => void
    deleteUserThunk: (id: number) => void
}

type PropsType = mapStateToPropsType & mapDispatchType & propsFromAnotherComponentType

export const AddButton:FC<PropsType> = (props) => {
    let [follow, setFollow] = useState(props.followed)

    useEffect(() => {
        setFollow(props.followed)
    }, [props.followed])

    let addUser = () => {
        props.addUserThunk(props.id, props.name, props.avatar)
    };

    let deleteUser = () => {
        props.deleteUserThunk(props.id)
    };

    let deleteButtonClasses = `
    ${Content.content__asideRightDeleteButton_decor} 
    ${Content.content__asideRightButtonPadding} 
    ${Content.content__asideRightButton_margin}
    `;

    let addButtonClasses = `
    ${Content.content__asideRightButton_decor} 
    ${Content.content__asideRightButtonPadding}
    ${Content.content__asideRightButton_margin}
    `;
    return (
        <div>
            {
                follow ?
                    <button
                        onClick={deleteUser}
                        disabled={props.addButton || props.isFetching}
                        className={deleteButtonClasses}
                    >
                        Delete
                    </button>
                    :
                    <button
                        onClick={addUser}
                        disabled={props.addButton || props.isFetching}
                        className={addButtonClasses}
                    >
                        Add
                    </button>
            }
        </div>
    )
}
