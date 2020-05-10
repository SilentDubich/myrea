import React from "react";
import {API} from "../API/API";
import {addFriend, deleteFriend} from "./FriendsReducer";
import {getFollow} from "./ProfileInfoReducer";

let defaultStateUsers = {
    users: [],
    tempSearch: '',
    totalUsers: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    pageButton: false,
    addButton: false,
};

//create class for dispatches
const SET_USERS = 'setUsers';
const SET_PAGE = 'setPage';
const SET_TOTAL_USERS = 'setTotalUsers';
const ADD_USER = 'addUser';
const DELETE_USER = 'deleteUser';
const SWITCH_IS_FETCHING = 'switchIsFetching';
const SWITCH_IS_BUTTON = 'switchIsButton';
const SWITCH_IS_ADD_BUTTON = 'switchIsAddButton';
const UPDATE_SEARCH_TEXT = 'userReducer/updateSearchText';
export const addUser = (id) => ({type: ADD_USER, id});
export const deleteUser = (id) => ({type: DELETE_USER, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsers = (count) => ({type: SET_TOTAL_USERS, count});
export const setPage = (page) => ({type: SET_PAGE, page});
export const switchIsFetching = (bool) => ({type: SWITCH_IS_FETCHING, bool});
export const switchIsButton = (bool) => ({type: SWITCH_IS_BUTTON, bool});
export const switchIsAddButton = (bool) => ({type: SWITCH_IS_ADD_BUTTON, bool});
export const updateSearchText = (text) => ({type: UPDATE_SEARCH_TEXT, text});

export const getUsersThunk = (pageSize, currentPage, user) => {
    return async dispatch => {
        dispatch(switchIsFetching(true));
        // dispatch(switchIsButton(true));
        let data = await API.getUsers(pageSize, currentPage, user)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(switchIsFetching(false));
        // dispatch(switchIsButton(false));
    }
};

export const addUserThunk = (id, name, avatar) => {
    return async dispatch => {
        dispatch(switchIsAddButton(true));
        await API.postFriendFollow(id)
        dispatch(addFriend({id, name, avatar, followed: true}));
        dispatch(addUser(id))
        dispatch(getFollow(true))
        dispatch(switchIsAddButton(false));

    }
};
export const deleteUserThunk = (id) => {
    return async dispatch => {
        dispatch(switchIsAddButton(true));
        await API.postFriendUnFollow(id)
        dispatch(deleteFriend(id));
        dispatch(deleteUser(id))
        dispatch(getFollow(false))
        dispatch(switchIsAddButton(false));
    }
};


export function UsersInstructions(state = defaultStateUsers, action) {
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
