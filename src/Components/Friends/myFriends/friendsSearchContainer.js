import React from "react";
import {connect} from "react-redux";
import {updateSearch} from "../../DataBases/Reducers/FriendsReducer";
import FriendsSearch from "./FriendsSearch";


let mapStateToProps = state => {
    return {
        tempSearch: state.friendsReducer.tempSearch
    }
}

export const FriendSearchContainer = connect(mapStateToProps, {updateSearch})(FriendsSearch)