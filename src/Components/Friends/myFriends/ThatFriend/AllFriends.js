import React from "react";
import ThatFriend from "./ThatFriend";
import * as axios from 'axios';
import {setAnotherProfile} from "../../../DataBases/Reducers/ProfileInfoReducer";

function AllFriends(props) {
    // debugger
    let allFriends = props.friends
        .map(char => <ThatFriend
                key={char.id}
                id={char.id}
                name={char.name}
                img={char.avatar}
                getProfileThunk={props.getProfileThunk}
                setAnotherProfile={props.setAnotherProfile}
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
