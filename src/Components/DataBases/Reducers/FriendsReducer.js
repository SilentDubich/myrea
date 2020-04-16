import React from "react";
import Senya from "../../../img/Avatars/senya.jpg";
import Pendalf from "../../../img/Avatars/pendalf.jpg";
import Goliy from "../../../img/Avatars/goliy.jpg";
import Agronom from "../../../img/Avatars/Agronom.jpg";
import Fedor from "../../../img/Avatars/fedor.jpg";
import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg";
import {API} from "../API/API";

const ADD_FRIEND = 'addFriend';
const DELETE_FRIEND = 'deleteFriend';
const LOAD_FRIENDS = 'loadFriends'
export const addFriend = (id, name, avatar, add) => ({type: ADD_FRIEND, id, name, avatar, add});
export const deleteFriend = (id) => ({type: DELETE_FRIEND, id});
export const loadFriends = (users, pageSize) => ({type: LOAD_FRIENDS, users, pageSize});

export const loadFriendsDataThunk = (pageSize, pageNumber) => {

    return dispatch => {
        return API.getUsers(pageSize, pageNumber)
            .then(response => {
                dispatch(loadFriends(response.items, pageSize))
            })

    }
}


let defaultStateFriends = [
    {
        id: 0,
        Name: 'Senya',
        LastName: 'Lutiy',
        Avatar: Senya,
        followed: true
    },
    {
        id: 1,
        Name: 'Pendalf',
        LastName: 'Grey',
        Avatar: Pendalf,
        followed: true
    }
];

export function FriendsInstructions(state = defaultStateFriends, action) {

    let stateCopy = [...state];
    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = {
                id: action.id,
                Name: action.name,
                LastName: action.lastName || null,
                Avatar: action.avatar || emptyPhoto,
                followed: action.add
            };
            stateCopy.push(newFriend);
            return stateCopy
        case DELETE_FRIEND:
            for (let i = 0; i < stateCopy.length; i++) {
                if (stateCopy[i].id === action.id) {
                    stateCopy.splice(i, 1)
                }
            }
            return stateCopy;
        case LOAD_FRIENDS:
            for (let i = 0; i < action.users.length; i++) {
                if (action.users[i].followed) {
                    let friend = {
                        id: action.users[i].id,
                        Name: action.users[i].name,
                        LastName: '',
                        Avatar: action.users[i].photos.large || emptyPhoto,
                        followed: true
                    }
                    stateCopy.push(friend)
                }
            }
            return stateCopy;

        default:
            return state
    }
}
