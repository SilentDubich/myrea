import React from "react";
import ThatFriend from "./ThatFriend";
import NoResultSearch from "../../../Common/NoResultSearch";

function AllFriends(props) {
    // debugger
    let pattern = new RegExp(props.tempSearch, ['giy'] );
    let allFriends = props.friends
        .map(char => {
            if (props.tempSearch.length === 0 || char.name.match(pattern)) {
                return <ThatFriend
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    img={char.avatar}
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

export default AllFriends;
