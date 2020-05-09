import React from "react";
import Senya from "../../../img/Avatars/senya.jpg";
import Pendalf from "../../../img/Avatars/pendalf.jpg";
import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg";


const ADD_FRIEND = 'addFriend';
const DELETE_FRIEND = 'deleteFriend';
const LOAD_FRIENDS = 'loadFriends'
export const addFriend = (data) => ({type: ADD_FRIEND, data});
export const deleteFriend = id => ({type: DELETE_FRIEND, id});
export const loadFriends = data => ({type: LOAD_FRIENDS, data});


let defaultStateFriends = {
    friends: [
        {
            id: 0,
            name: 'Senya Lutiy',
            avatar: Senya,
            followed: true
        },
        {
            id: 1,
            name: 'Pendalf Grey',
            avatar: Pendalf,
            followed: true
        }
    ]
}

export function FriendsInstructions(state = defaultStateFriends, action) {
    let stateCopy = {...state, friends: [...state.friends]};
    switch (action.type) {
        case ADD_FRIEND:
            action.data.avatar = action.data.avatar || emptyPhoto
            return {...state, friends: [...state.friends, action.data]}
        case DELETE_FRIEND:
            for (let i = 0; i < stateCopy.length; i++) {
                if (stateCopy[i].id === action.id) {
                    stateCopy.splice(i, 1)
                }
            }
            return stateCopy;
        case LOAD_FRIENDS:
            for (let i = 0; i < action.data.length; i++) {
                action.data[i].avatar = action.data[i].photos.large || emptyPhoto
                delete action.data[i].photos
                delete action.data[i].status
                delete action.data[i].uniqueUrlName
            }
            return {...state, friends: [...action.data]}
        default:
            return state
    }
}
