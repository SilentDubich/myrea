import React from "react";
import {API} from "../API/API";
import {addFriend, deleteFriend} from "./FriendsReducer";
import {getFollow} from "./ProfileInfoReducer";
import { UserType } from "../../Common/types";



let defaultStateUsers = {
    users: [] as Array<UserType>,
    tempSearch: '',
    totalUsers: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    pageButton: false,
    addButton: false,
};

type DefaultStateType = typeof defaultStateUsers

//create class for dispatches
const SET_USERS = 'UserReducer/setUsers';
const SET_PAGE = 'UserReducer/setPage';
const SET_TOTAL_USERS = 'UserReducer/setTotalUsers';
const ADD_USER = 'UserReducer/addUser';
const DELETE_USER = 'UserReducer/deleteUser';
const SWITCH_IS_FETCHING = 'UserReducer/switchIsFetching';
const SWITCH_IS_BUTTON = 'UserReducer/switchIsButton';
const SWITCH_IS_ADD_BUTTON = 'UserReducer/switchIsAddButton';
const UPDATE_SEARCH_TEXT = 'userReducer/updateSearchText';
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const addUser = (id: number) => ({type: ADD_USER, id});
export const deleteUser = (id: number) => ({type: DELETE_USER, id});
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users});
export const setTotalUsers = (count: number) => ({type: SET_TOTAL_USERS, count});
export const setPage = (page: number) => ({type: SET_PAGE, page});
export const switchIsFetching = (bool: boolean) => ({type: SWITCH_IS_FETCHING, bool});
export const switchIsButton = (bool: boolean) => ({type: SWITCH_IS_BUTTON, bool});
export const switchIsAddButton = (bool: boolean) => ({type: SWITCH_IS_ADD_BUTTON, bool});
export const updateSearchText = (text: string) => ({type: UPDATE_SEARCH_TEXT, text});

export const getUsersThunk = (pageSize: number, currentPage: number, user: any) => {
    return async (dispatch:any) => {
        dispatch(switchIsFetching(true));
        let data = await API.getUsers(pageSize, currentPage, user)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(switchIsFetching(false));
    }
};

export const addUserThunk = (id:number, name:string, avatar:string) => {
    return async (dispatch:any) => {
        dispatch(switchIsAddButton(true));
        await API.postFriendFollow(id)
        dispatch(addFriend({id, name, avatar, followed: true}));
        dispatch(addUser(id))
        dispatch(getFollow(true))
        dispatch(switchIsAddButton(false));

    }
};
export const deleteUserThunk = (id:number) => {
    return async (dispatch:any) => {
        dispatch(switchIsAddButton(true));
        await API.postFriendUnFollow(id)
        dispatch(deleteFriend(id));
        dispatch(deleteUser(id))
        dispatch(getFollow(false))
        dispatch(switchIsAddButton(false));
    }
};


export function UsersInstructions(state = defaultStateUsers, action:any):DefaultStateType {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.id) {
                        return {...us, followed: true}
                    }
                    return us
                }),
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.id) {
                        return {...us, followed: false}
                    }
                    return us
                })
            };
        case UPDATE_SEARCH_TEXT:
            return {...state, tempSearch: action.text}
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.count};
        case SWITCH_IS_FETCHING:
            return {...state, isFetching: action.bool};
        case SWITCH_IS_BUTTON:
            return {...state, pageButton: action.bool};
        case SWITCH_IS_ADD_BUTTON:
            return {...state, addButton: action.bool};
        default:
            return state
    }
}