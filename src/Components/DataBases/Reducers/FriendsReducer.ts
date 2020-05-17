import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg"
import {FriendType, UserType} from "../../Common/types"


const ADD_FRIEND = 'FriendsReducer/addFriend'
const DELETE_FRIEND = 'FriendsReducer/deleteFriend'
const LOAD_FRIENDS = 'FriendsReducer/loadFriends'
const UPDATE_SEARCH = 'FriendsReducer/updateSearch'
type AddFriendType = {
    type: typeof ADD_FRIEND
    data: FriendType
}
export const addFriend = (data: FriendType): AddFriendType => ({type: ADD_FRIEND, data})
type DeleteFriendType = {
    type: typeof DELETE_FRIEND
    id: number
}
export const deleteFriend = (id: number): DeleteFriendType => ({type: DELETE_FRIEND, id})
type LoadFriendsType = {
    type: typeof LOAD_FRIENDS
    data: Array<UserType>
}
export const loadFriends = (data: Array<UserType>): LoadFriendsType => ({type: LOAD_FRIENDS, data})
type UpdateSearchType = {
    type: typeof UPDATE_SEARCH
    text: string
}
export const updateSearch = (text: string): UpdateSearchType => ({type: UPDATE_SEARCH, text})


let defaultStateFriends = {
    friends: [] as Array<FriendType>,
    tempSearch: ''
}

type DefaultStateType = typeof defaultStateFriends

export function FriendsInstructions(state = defaultStateFriends, action: any): DefaultStateType {
    let stateCopy: any = {...state, friends: [...state.friends]};
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
        case UPDATE_SEARCH:
            return {...state, tempSearch: action.text}
        default:
            return state
    }
}
