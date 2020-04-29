import React from "react";
import ThatFriend from "./ThatFriend";
import * as axios from 'axios';

function AllFriends(props) {
    // debugger
    let allFriends = props.friends
        .map(char => <ThatFriend
                key={char.id}
                id={char.id}
                name={char.name}
                img={char.avatar}
                getProfileThunk={props.getProfileThunk}
            />
        );
    return (
        <div>
            <p>Friends:<span>{props.friends.length}</span></p>
            {allFriends}
        </div>
    )
}

export default AllFriends;
