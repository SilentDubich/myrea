import React from "react";
import Senya from "../../../img/Avatars/senya.jpg";

let defaultStateUsers = {
    users: [
        {
            name: "user_Danila",
            id: 6583,
            uniqueUrlName: null,
            photos: {
                small: Senya,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: "user_Senya",
            id: 6584,
            uniqueUrlName: null,
            photos: {
                small: Senya,
                large: null
            },
            status: null,
            followed: false
        },
        {
            "name": "Iskeen",
            "id": 6582,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Landerfire",
            "id": 6581,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Fredya541",
            "id": 6580,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Fedor54111",
            "id": 6579,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "PavelMorozhnikov",
            "id": 6578,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "hot",
            "id": 6577,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Calvados",
            "id": 6576,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Crable",
            "id": 6575,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "VitaliyKK",
            "id": 6574,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }
    ]
};

const ADD_FRIEND = 'addFriend';
const DELETE_FRIEND = 'deleteFriend';
const SET_USERS = 'setUsers';
export const addFriendCreation = (id) => ({type: ADD_FRIEND, id});
export const deleteFriendCreation = (id) => ({type: DELETE_FRIEND, id});
export const setUsersCreation = (users) => ({type: SET_USERS, users});


export function UsersInstructions(state = defaultStateUsers, action) {
    let stateCopy = {
        ...state
    };
    switch (action.type) {

        case SET_USERS:
            return state;
        default:
            return state
    }
}