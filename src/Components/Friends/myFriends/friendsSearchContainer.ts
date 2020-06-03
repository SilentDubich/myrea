import React from "react";
import {connect} from "react-redux";
import {actionsFriends} from "../../DataBases/Reducers/FriendsReducer";
import {FriendsSearch} from "./FriendsSearch";
import {AppStateType} from "../../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) => {
    return {
        tempSearch: state.friendsReducer.tempSearch
    }
}
const updateSearch = actionsFriends.updateSearch

export const FriendSearchContainer = connect(mapStateToProps, {updateSearch})(FriendsSearch)