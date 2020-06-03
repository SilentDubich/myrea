import React, {FC} from "react";
import {ThatFriend} from "./ThatFriend";
import NoResultSearch from "../../../Common/NoResultSearch";
import {FriendType} from "../../../Common/types";

type mapStateToPropsType = {
    friends: Array<FriendType>,
    tempSearch: string
    isFetching: boolean
}

type mapDispatchType = {
    getProfileThunk: (id: number, who: string) => void
    setAnotherProfile: (id: number, who: string) => void
}

type PropsType = mapStateToPropsType & mapDispatchType

export const AllFriends:FC<PropsType> = (props) => {
    let pattern = new RegExp(props.tempSearch, 'giy' );
    let allFriends = props.friends
        .map(char => {
            if (props.tempSearch.length === 0 || char.name.match(pattern)) {
                return <ThatFriend
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    img={char.avatar}
                    isFetching={props.isFetching}
                    getProfileThunk={props.getProfileThunk}
                    setAnotherProfile={props.setAnotherProfile}
                />
            }
        }
    );
    for (let i = 0; i < allFriends.length; i++) {
        if (allFriends[i]) return (
            <div>
                <p>Friends:<span>{props.friends.length}</span></p>
                {allFriends}
            </div>
        )
    }
    return (
        <div>
            <NoResultSearch/>
        </div>
    )
}
