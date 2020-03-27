import React from "react";
import ThatFriend from "./ThatFriend";
import * as axios from 'axios';

function AllFriends(props) {
    // debugger
    let allFriends = props.Friends.map( char => <ThatFriend id={char.id} name={char.Name} lastName={char.LastName} img={char.Avatar}/>
    );
    return(
        <div>
            {allFriends}
        </div>
    )
}

export default AllFriends;