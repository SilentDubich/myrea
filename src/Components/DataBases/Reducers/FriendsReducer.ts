import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg"
import {FriendType, UserType} from "../../Common/types"
import {AppStateType, InferActionsTypes} from "../Redux/Store";
import {ThunkAction} from "redux-thunk";

type ActionTypes = InferActionsTypes<typeof actionsFriends>
export type ThunkFriendsType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>
type loadFriendsType = FriendType & UserType
export const actionsFriends = {
    addFriend: (data: FriendType) => ({type: 'FriendsReducer/addFriend', data} as const),
    deleteFriend: (id: number) => ({type: 'FriendsReducer/deleteFriend', id} as const),
    loadFriends: (data: Array<any>) => ({type: 'FriendsReducer/loadFriends', data} as const),
    updateSearch: (text: string) => ({type: 'FriendsReducer/updateSearch', text} as const)
}

let defaultStateFriends = {
    friends: [] as Array<FriendType>,
    tempSearch: ''
}

type DefaultStateType = typeof defaultStateFriends

export function FriendsInstructions(state = defaultStateFriends, action: ActionTypes): DefaultStateType {
    let stateCopy: any = {...state, friends: [...state.friends]};
    switch (action.type) {
        case "FriendsReducer/addFriend":
            action.data.avatar = action.data.avatar || emptyPhoto
            return {...state, friends: [...state.friends, action.data]}
        case "FriendsReducer/deleteFriend":
            return {...state, friends: state.friends.filter( el => el.id !== action.id)}
        case "FriendsReducer/loadFriends":
            for (let i = 0; i < action.data.length; i++) {
                action.data[i].avatar = action.data[i].photos.large || emptyPhoto
                delete action.data[i].photos
                delete action.data[i].status
                delete action.data[i].uniqueUrlName
            }
            return {...state, friends: [...action.data]}
        case "FriendsReducer/updateSearch":
            return {...state, tempSearch: action.text}
        default:
            return state
    }
}
