import {API} from "../API/API";
// import {addFriend, deleteFriend} from "./FriendsReducer";
import {actionsFriends} from "./FriendsReducer";
import {actionsProfile} from "./ProfileInfoReducer";
import {UserType} from "../../Common/types";
import {AppStateType, InferActionsTypes} from "../Redux/Store";
import {ThunkAction} from "redux-thunk";


let defaultStateUsers = {
    users: [] as Array<UserType>,
    tempSearch: '',
    totalUsers: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    pageButton: false,
    addButton: false,
};

type DefaultStateType = typeof defaultStateUsers

type ActionUserType = InferActionsTypes<typeof actionsUser>
type ThunkUserType = ThunkAction<Promise<void>, AppStateType, unknown, ActionUserType>


export const actionsUser = {
    addUser: (id: number) => ({type: 'UserReducer/addUser', id} as const),
    deleteUser: (id: number) => ({type: 'UserReducer/deleteUser', id} as const),
    setUsers: (users: Array<UserType>) => ({type: 'UserReducer/setUsers', users} as const),
    setTotalUsers: (count: number) => ({type: 'UserReducer/setTotalUsers', count} as const),
    setPage: (page: number) => ({type: 'UserReducer/setPage', page} as const),
    switchIsFetching: (bool: boolean) => ({type: 'UserReducer/switchIsFetching', bool} as const),
    switchIsButton: (bool: boolean) => ({type: 'UserReducer/switchIsButton', bool} as const),
    switchIsAddButton: (bool: boolean) => ({type: 'UserReducer/switchIsAddButton', bool} as const),
    updateSearchText: (text: string) => ({type: 'userReducer/updateSearchText', text} as const)
}


export const getUsersThunk = (pageSize: number, currentPage: number, user: any): ThunkUserType => {
    return async (dispatch: any) => {
        dispatch(actionsUser.switchIsFetching(true));
        let data = await API.getUsers(pageSize, currentPage, user)
        dispatch(actionsUser.setUsers(data.items));
        dispatch(actionsUser.setTotalUsers(data.totalCount));
        dispatch(actionsUser.switchIsFetching(false));
    }
};

export const addUserThunk = (id:number, name:string, avatar:string): ThunkUserType => {
    return async (dispatch: any) => {
        dispatch(actionsUser.switchIsAddButton(true));
        await API.postFriendFollow(id)
        dispatch(actionsFriends.addFriend({id, name, avatar, followed: true}));
        dispatch(actionsUser.addUser(id))
        dispatch(actionsProfile.getFollow(true))
        dispatch(actionsUser.switchIsAddButton(false));
    }
};
export const deleteUserThunk = (id: number): ThunkUserType => {
    return async (dispatch: any) => {
        dispatch(actionsUser.switchIsAddButton(true));
        await API.postFriendUnFollow(id)
        dispatch(actionsFriends.deleteFriend(id));
        dispatch(actionsUser.deleteUser(id))
        dispatch(actionsProfile.getFollow(false))
        dispatch(actionsUser.switchIsAddButton(false));
    }
};


export function UsersInstructions(state = defaultStateUsers, action: ActionUserType):DefaultStateType {
    switch (action.type) {
        case "UserReducer/addUser":
            return {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.id) {
                        return {...us, followed: true}
                    }
                    return us
                }),
            };
        case "UserReducer/deleteUser":
            return {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.id) {
                        return {...us, followed: false}
                    }
                    return us
                })
            };
        case "userReducer/updateSearchText":
            return {...state, tempSearch: action.text}
        case "UserReducer/setUsers":
            return {...state, users: [...action.users]};
        case "UserReducer/setPage":
            return {...state, currentPage: action.page};
        case "UserReducer/setTotalUsers":
            return {...state, totalUsers: action.count};
        case "UserReducer/switchIsFetching":
            return {...state, isFetching: action.bool};
        case "UserReducer/switchIsButton":
            return {...state, pageButton: action.bool};
        case "UserReducer/switchIsAddButton":
            return {...state, addButton: action.bool};
        default:
            return state
    }
}