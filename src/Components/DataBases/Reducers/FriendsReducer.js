import React from "react";
import Senya from "../../../img/Avatars/senya.jpg";
import Pendalf from "../../../img/Avatars/pendalf.jpg";
import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg";


const ADD_FRIEND = 'addFriend';
const DELETE_FRIEND = 'deleteFriend';
export const addFriend = (data) => ({type: ADD_FRIEND, data});
export const deleteFriend = id => ({type: DELETE_FRIEND, id});


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
        default:
            return state
    }
}
