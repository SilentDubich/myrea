import Pendalf from "../../../img/Avatars/pendalf.jpg";
import Senya from "../../../img/Avatars/senya.jpg";
import Goliy from "../../../img/Avatars/goliy.jpg";
import Fedor from "../../../img/Avatars/fedor.jpg";
import Agronom from "../../../img/Avatars/Agronom.jpg";
import MyFriend from "../../Profile/FriendList/MyFriend/FriendLittleAva";
import React from "react";

let friends = [
    {name: 'Pendalf', ava: Pendalf },
    {name: 'Senya', ava: Senya },
    {name: 'Goliy', ava: Goliy },
    {name: 'Fedor', ava: Fedor},
    {name: 'Agronom', ava: Agronom}
];

let allFriends = friends.map( friend => <MyFriend name={friend.name} img={friend.ava}/>);

export default allFriends