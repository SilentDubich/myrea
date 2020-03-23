import Pendalf from "../../../img/Avatars/pendalf.jpg";
import Senya from "../../../img/Avatars/senya.jpg";
import Goliy from "../../../img/Avatars/goliy.jpg";
import React from "react";
import MiniDialogs from "../../Dialog/MainDialogPage/MiniDialogs/DialogsMini";
import PersonDialog from "../../Dialog/MainDialogPage/PersonDialog";

const dialogs = [
    {
        id: 1,
        name: 'Pendalf',
        ava: Pendalf,
        allMessages: [
            {
                key: 1,
                message: 'Hi loser'
            },
            {
                key: 2,
                message: 'Lol, Fedor did it ))0)'
            }
        ],
        lastMessage: 'Lol, Fedor did it ))0)'
    },
    {
        id: 2,
        name: 'Senya',
        ava: Senya,
        allMessages: [
            {
                // key: 1,
                message: 'Hi loserr'
            },
            {
                // key: 2,
                message: 'Ezzzz'
            }
        ],
        lastMessage: 'Ezzzz'},
    {
        id: 3,
        name: 'Goliy',
        ava: Goliy,
        allMessages: [
            {
                // key: 1,
                message: 'Hi loserrr'
            },
            {
                // key: 2,
                message: 'Omg im burned'
            }
        ],
        lastMessage: 'Omg im burned'
    },
];


const personDialog = dialogs.map( all => <PersonDialog all={all.allMessages}/> );

const dialogsData = dialogs
    .map( dialog => <MiniDialogs
        name={dialog.name}
        img={dialog.ava}
        id={dialog.id}
        message={dialog.lastMessage}
    />);

export {dialogsData, dialogs, personDialog}