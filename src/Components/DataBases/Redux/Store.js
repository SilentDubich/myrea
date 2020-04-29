import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {PostsInstructions} from "../Reducers/PostsReducer";
import {MessagesInstructions} from "../Reducers/MessagesReducer";
import {ProfileInstructions} from "../Reducers/ProfileInfoReducer";
import {SubscribesInstructions} from "../Reducers/SubscribesReducer";
import {FriendsInstructions} from "../Reducers/FriendsReducer";
import {UsersInstructions} from "../Reducers/UserReducer";
import {LoginInstructions} from "../Reducers/LoginReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form";

let allReduces = combineReducers(
    {
        postsReducer: PostsInstructions,
        messageReducer: MessagesInstructions,
        profileInfoReducer: ProfileInstructions,
        subscribesReducer: SubscribesInstructions,
        friendsReducer: FriendsInstructions,
        usersReducer: UsersInstructions,
        loginReducer: LoginInstructions,
        form: formReducer
    }
);



export const store = createStore(allReduces, applyMiddleware(thunkMiddleware));

window.store = store;
