import React from "react";
import Senya from "../../../img/Avatars/senya.jpg";
import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg";

let defaultStateUsers = {
    users: [],
    totalUsers: 0,
    currentPage: 1,
    pageSize: 5,
    isFetching: false,
    button: false
};

const SET_USERS = 'setUsers';
const SET_PAGE = 'setPage';
const SET_TOTAL_USERS = 'setTotalUsers';
const ADD_USER = 'addUser';
const DELETE_USER = 'deleteUser';
const SWITCH_IS_FETCHING = 'switchIsFetching';
const SWITCH_IS_BUTTON = 'switchIsButton';
export const addUserCreation = (id) => ({type: ADD_USER, id});
export const deleteUserCreation = (id) => ({type: DELETE_USER, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsers = (count) => ({type: SET_TOTAL_USERS, count});
export const setPage = (page) => ({type: SET_PAGE, page});
export const switchIsFetching = (bool) => ({type: SWITCH_IS_FETCHING, bool});
export const switchIsButton = (bool) => ({type: SWITCH_IS_BUTTON, bool});


export function UsersInstructions(state = defaultStateUsers, action) {
    // debugger
    switch (action.type) {
        case ADD_USER:
            return {...state,
            users: state.users.map(us =>  {
                if (us.id === action.id){
                    return {...us, followed: true}
                }
                return us
            })};
        case DELETE_USER:
            return {...state,
            users: state.users.map(us =>  {
                if (us.id === action.id){
                    return {...us, followed: false}
                }
                return us
            })};
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.count};
        case SWITCH_IS_FETCHING:
            return {...state, isFetching: action.bool};
        case SWITCH_IS_BUTTON:
            return {...state, button: action.bool};
        default:
            return state
    }
}
