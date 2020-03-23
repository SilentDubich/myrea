import React from "react";
import Senya from "../../../img/Avatars/senya.jpg";

let defaultStateUsers = {
    users: [],
    pageCounts: 5,
    totalUsers: 2500,
    currentPage: 5,
    pageSize: 5
};

const SET_USERS = 'setUsers';
const SET_PAGE = 'setPage';
export const setUsersCreation = (users) => ({type: SET_USERS, users});
export const setPageCreation = (page) => ({type: SET_PAGE, page});


export function UsersInstructions(state = defaultStateUsers, action) {
    debugger
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users] };
        case SET_PAGE:
            return {...state, currentPage: action.page};
        default:
            return state
    }
}
