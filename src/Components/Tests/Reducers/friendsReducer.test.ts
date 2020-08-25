import React from "react";
import {FriendType} from "../../Common/types";
import {actionsFriends, FriendsInstructions} from "../../DataBases/Reducers/FriendsReducer";

let state = {friends: [{id: 1234, name: 'me4', avatar: '1234', followed: false}] as Array<FriendType>, tempSearch: ''}


it('should be friends count increment ', () => {
    // 1. data
    let action = actionsFriends.addFriend({id: 123, name: 'me', avatar: '123', followed: true})
    // 2. action
    let testAction = FriendsInstructions(state, action)
    //3. exception
    expect(testAction.friends.length).toBe(2)
});
it('should be friends count decrement ', () => {
    // 1. data
    let action = actionsFriends.deleteFriend(1234)
    // 2. action
    let testAction = FriendsInstructions(state, action)
    //3. exception
    expect(testAction.friends.length).toBe(0)
});