import React from "react";
import Senya from "../../../img/Avatars/senya.jpg";
import Pendalf from "../../../img/Avatars/pendalf.jpg";
import Goliy from "../../../img/Avatars/goliy.jpg";
import Agronom from "../../../img/Avatars/Agronom.jpg";
import Fedor from "../../../img/Avatars/fedor.jpg";
import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg";

const ADD_FRIEND = 'addFriend';
const DELETE_FRIEND = 'deleteFriend';
export const addFriendCreation = (id, name, avatar) => ({type: ADD_FRIEND, id, name, avatar});
export const deleteFriendCreation = (id) => ({type: DELETE_FRIEND, id});


let defaultStateFriends =  [
    {
        id: 0,
        Name: 'Senya',
        LastName: 'Lutiy',
        Avatar: Senya,
    },
    {
        id: 1,
        Name: 'Pendalf',
        LastName: 'Grey',
        Avatar: Pendalf,
    },
    {
        id: 2,
        Name: 'Goliy',
        LastName: 'Shmiga',
        Avatar: Goliy,
    },
    {
        id: 3,
        Name: 'Agronom',
        LastName: 'Bomj',
        Avatar: Agronom,
    },
    {
        id: 4,
        Name: 'Fedor',
        LastName: 'Sumkin',
        Avatar: Fedor,
    }
];

export function FriendsInstructions(state = defaultStateFriends, action) {
    // debugger
    let stateCopy = [...state];
    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = {
                id: action.id,
                Name: action.name,
                LastName: action.lastName || null,
                Avatar: action.avatar || emptyPhoto
            };
            stateCopy.push(newFriend);
            return stateCopy
        case DELETE_FRIEND:
            return state
        default:
            return state
    }
}
