import React from "react";
import Sarumyan from "../../../img/Avatars/sarumyan.jpg";

let defaultStateProfile =  {
    id: 0,
    Name: 'Sarumyan',
    LastName: 'Armyanskiy',
    Status: 'Just I saw the dollar exchange rate',
    Avatar: Sarumyan,
};

export function ProfileInstructions(state = defaultStateProfile, action) {

    return state

}
