import React from "react";
import ThatFriend from "./ThatFriend";
import * as axios from 'axios';

function AllFriends(props) {
    // debugger
    let allFriends = props.Friends.map( char => <ThatFriend
        id={char.id}
        name={char.Name}
        lastName={char.LastName}
        img={char.Avatar}
        getProfileThunk={props.getProfileThunk}
        />
    );
    return(
        <div>
            {allFriends}
        </div>
    )
}

export default AllFriends;
