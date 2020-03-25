import React from "react";
import Sarumyan from "../../../img/Avatars/sarumyan.jpg";
import Senya from "../../../img/Avatars/senya.jpg";
import Pendalf from "../../../img/Avatars/pendalf.jpg";

const ADD_POST = 'addPost';
const UPDATE_POST_TEXT = 'updateTextPostRedactor';
const DELETE_POST = 'deletePost';
export const postCreation = () => ({type: ADD_POST});
export const updatePostTextCreation = text => ({type: UPDATE_POST_TEXT, text: text});
export const deletePostCreation = id => ({type: DELETE_POST, id: id});

let defaultStatePosts = {
    ProfileInfo: {
        id: 0,
        Name: "Sarumyan",
        LastName: '',
        Status: '',
        Avatar: Sarumyan,
    },
    Posts: [
        {id: 0, name: 'Sarumyan', text: 'Hello world !', ava: Sarumyan, likes: 11},
        {id: 1, name: 'Senya', text: 'Hi', ava: Senya, likes: 15},
        {id: 2, name: 'Pendalf', text: 'Hi', ava: Pendalf, likes: 99},
        {id: 3, name: 'Pendalf', text: 'Hiiiii', ava: Pendalf, likes: 999}
    ],
    Temp: [
        {
            PostRedactor: ''
        },
    ]
};

export function PostsInstructions(state = defaultStatePosts, action) {
    // debugger
    let stateCopy = {
        ...state,
        Posts: [...state.Posts]
    };
    switch (action.type) {
        case ADD_POST:{
            let id = 0;
            if (state.Posts.length !== 0){
                id = state
                    .Posts[state.Posts.length - 1]
                    .id + 1
            }
            let createPost = {
                id: id,
                name: state.ProfileInfo.Name,
                text: state.Temp[0].PostRedactor,
                ava: state.ProfileInfo.Avatar,
                likes: 0
            };
            stateCopy.Posts.push(createPost);
            stateCopy.Temp[0].PostRedactor = [...state.Temp[0].PostRedactor];
            stateCopy.Temp[0].PostRedactor = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            stateCopy.Temp[0].PostRedactor = action.text;
            return stateCopy;
        }

        case DELETE_POST:
            for (let i = 0; i < stateCopy.Posts.length; i++) {
                if (stateCopy.Posts[i].id === action.id) {
                    stateCopy.Posts.splice(i, 1)
                }
            }
            return stateCopy;

        default:
            return state
    }
}
