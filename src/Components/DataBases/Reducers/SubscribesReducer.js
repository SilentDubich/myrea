import React from "react";
import Mordovia from "../../../img/Avatars/mordovia.jpg";
import Ali from "../../../img/Avatars/ali.png";
import Staff from "../../../img/Avatars/cat.jpeg";

let defaultStateSubscribes =  [
    {
        id: 0,
        Name: 'Mordovia (official)',
        Avatar: Mordovia,
    },
    {
        id: 1,
        Name: 'Aliexpress',
        Avatar: Ali,
    },
    {
        id: 2,
        Name: 'Staffs - low price',
        Avatar: Staff,
    },

];

export function SubscribesInstructions(state = defaultStateSubscribes, action) {
    return state
}