import React from "react";
import Senya from "../../../img/Avatars/senya.jpg";

let defaultStateUsers = {
    users: [
        // {
        //     name: "user_Danila",
        //     id: 6583,
        //     uniqueUrlName: null,
        //     photos: {
        //         small: Senya,
        //         large: null
        //     },
        //     status: null,
        //     followed: false
        // },
        // {
        //     name: "user_Senya",
        //     id: 6584,
        //     uniqueUrlName: null,
        //     photos: {
        //         small: Senya,
        //         large: null
        //     },
        //     status: null,
        //     followed: false
        // }
    ]
};

const ADD_FRIEND = 'addFriend';
const DELETE_FRIEND = 'deleteFriend';
const SET_USERS = 'setUsers';
export const addFriendCreation = (id) => ({type: ADD_FRIEND, id});
export const deleteFriendCreation = (id) => ({type: DELETE_FRIEND, id});
export const setUsersCreation = (users) => ({type: SET_USERS, users});


export function UsersInstructions(state = defaultStateUsers, action) {
    // let stateCopy = {
    //     ...state
    // };
    switch (action.type) {

        case SET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state
    }
}
