// switch (action.type) {
//     case 'addPost':
//         this.addPost()
//         break;
//     case 'addMessage':
//         this.addMessage(action.date, action.ip)
//         break;
//     case 'updateTextMessage':
//         this.updateMessage(action.text)
//         break;
//     case 'updateTextPostRedactor':
//         this.updatePost(action.text)
//         break;
//     case 'deletePost':
//         this.deletePost(action.id)
//         break;
//     default:
//         return action
// }

// addPost() {
//     // if is empty return undefined
//     let id = this._state
//         .Profile
//         .Posts[this._state.Profile.Posts.length - 1]
//         .id + 1;
//
//     let createPost = {
//         id: id,
//         name: this._state.Profile.ProfileInfo.Name,
//         text: this._state.Profile.Temp[0].PostRedactor,
//         ava: this._state.Profile.ProfileInfo.Avatar,
//         likes: 0
//     };
//     this._state.Profile.Posts.push(createPost);
//     this._state.Profile.Temp[0].PostRedactor = '';
//     this.Render(this._state);
// },

// addMessage(date, ip) {
//     // debugger
//     // if is empty return undefined
//     let id = this._state
//         .Profile
//         .Dialogs[ip]
//         .Messages[this._state.Profile.Dialogs[ip].Messages.length - 1]
//         .id + 1;
//
//     let createMessage = {
//         id: id,
//         Who: this._state.Profile.ProfileInfo.Name,
//         Avatar: this._state.Profile.ProfileInfo.Avatar,
//         Date: date,
//         Message: this._state.Profile.Temp[1].MessagesRedactor
//     };
//     this._state.Profile.Dialogs[ip].Messages.push(createMessage);
//     this._state.Profile.Temp[1].MessagesRedactor = '';
//     this.Render(this._state)
// },
//
// updatePost(text) {
//     this._state.Profile.Temp[0].PostRedactor = text;
//     this.Render(this._state)
// },
//
// updateMessage(text) {
//     this._state.Profile.Temp[1].MessagesRedactor = text;
//     this.Render(this._state)
// },
//
// deletePost(id) {
//     for (let i = 0; i < this._state.Profile.Posts.length; i++) {
//         if (this._state.Profile.Posts[i].id === id) {
//             this._state.Profile.Posts.splice(i, 1)
//         }
//     }
//     this.Render(this._state)
// }


// export const state = {
//     Profile: {
//         ProfileInfo: {
//             id: 0,
//             Name: "Sarumyan",
//             Avatar: Sarumyan,
//         },
//         Friends: [
//             {
//                 id: 0,
//                 Name: 'Senya',
//                 LastName: '',
//                 Avatar: Senya,
//             },
//             {
//                 id: 1,
//                 Name: 'Pendalf',
//                 LastName: '',
//                 Avatar: Pendalf,
//             },
//             {
//                 id: 2,
//                 Name: 'Goliy',
//                 LastName: '',
//                 Avatar: Goliy,
//             },
//             {
//                 id: 3,
//                 Name: 'Agronom',
//                 LastName: '',
//                 Avatar: Agronom,
//             },
//             {
//                 id: 4,
//                 Name: 'Fedor',
//                 LastName: '',
//                 Avatar: Fedor,
//             }
//         ],
//         Dialogs: [
//             {
//                 id: 0,
//                 Name: "Pendalf",
//                 LastName: 'White',
//                 Avatar: Pendalf,
//                 Messages: [
//                     {
//                         id: 0,
//                         Who: 'Pendalf',
//                         Avatar: Pendalf,
//                         Data: '',
//                         Message: 'Lol, Fedor did it)))0)'
//                     },
//                     {
//                         id: 1,
//                         Who: 'Pendalf',
//                         Avatar: Pendalf,
//                         Data: '',
//                         Message: 'U hear me?)'
//                     }
//                 ]
//             },
//             {
//                 id: 1,
//                 Name: "Senya",
//                 LastName: '',
//                 Avatar: Senya,
//                 Messages: [
//                     {
//                         id: 0,
//                         Who: 'Senya',
//                         Avatar: Senya,
//                         Data: '',
//                         Message: 'Ezzzzz'
//                     },
//                     {
//                         id: 1,
//                         Who: 'Senya',
//                         Avatar: Senya,
//                         Data: '',
//                         Message: 'Ezzzzz'
//                     }
//                 ]
//             },
//             {
//                 id: 2,
//                 Name: "Goliy",
//                 LastName: 'Shmiga',
//                 Avatar: Goliy,
//                 Messages: [
//                     {
//                         id: 0,
//                         Who: 'Goliy',
//                         Avatar: Goliy,
//                         Data: '',
//                         Message: 'Omg im burned'
//                     }
//                 ]
//             },
//             {
//                 id: 3,
//                 Name: "Agronom",
//                 LastName: 'Bomj',
//                 Avatar: Agronom,
//                 Messages: [
//                     {
//                         id: 0,
//                         Who: 'Agronom',
//                         Avatar: Agronom,
//                         Data: '',
//                         Message: 'im king lol'
//                     }
//                 ]
//             }
//         ],
//         Subscribes: [
//             {
//                 id: 0,
//                 Name: 'Mordovia (official)',
//                 Avatar: Mordovia,
//             },
//             {
//                 id: 1,
//                 Name: 'Aliexpress',
//                 Avatar: Ali,
//             },
//             {
//                 id: 2,
//                 Name: 'Staffs - low price',
//                 Avatar: Staff,
//             },
//
//         ],
//         Posts: [
//             {id: 0, name: 'Sarumyan', text: 'Hello world !', ava: Sarumyan, likes: 11},
//             {id: 1, name: 'Senya', text: 'Hi', ava: Senya, likes: 15},
//             {id: 2, name: 'Pendalf', text: 'Hi', ava: Pendalf, likes: 99},
//             {id: 3, name: 'Pendalf', text: 'Hiiiii', ava: Pendalf, likes: 999}
//         ],
//         Temp: [
//             {
//                 PostRedactor: ''
//             },
//             {
//                 MessagesRedactor: ''
//             },
//         ]
//     }
// };
//
// export let Render;
//
// export const Subscribe = observer => {
//     Render = observer;
// };
//
// export let addPost = () => {
//     // if is empty return undefined
//     let id = state
//         .Profile
//         .Posts[state.Profile.Posts.length - 1]
//         .id + 1;
//
//     let createPost = {
//         id: id,
//         name: state.Profile.ProfileInfo.Name,
//         text: state.Profile.Temp[0].PostRedactor,
//         ava: state.Profile.ProfileInfo.Avatar,
//         likes: 0
//     };
//     state.Profile.Posts.push(createPost);
//     state.Profile.Temp[0].PostRedactor = '';
//     Render(state);
// };
//
// export let addMessage = (date, ip) => {
//     // debugger
//     // if is empty return undefined
//     let id = state
//         .Profile
//         .Dialogs[ip]
//         .Messages[state.Profile.Dialogs[ip].Messages.length - 1]
//         .id + 1;
//
//     let createMessage = {
//         id: id,
//         Who: state.Profile.ProfileInfo.Name,
//         Avatar: state.Profile.ProfileInfo.Avatar,
//         Date: date,
//         Message: state.Profile.Temp[1].MessagesRedactor
//     };
//     state.Profile.Dialogs[ip].Messages.push(createMessage);
//     state.Profile.Temp[1].MessagesRedactor = '';
//     Render(state)
// };
//
// export let updatePost = (text) => {
//     state.Profile.Temp[0].PostRedactor = text;
//     Render(state)
// };
//
// export let updateMessage = (text) => {
//     state.Profile.Temp[1].MessagesRedactor = text;
//     Render(state)
// };
//
// export let deletePost = (id) => {
//     for (let i = 0; i < state.Profile.Posts.length; i++) {
//         if (state.Profile.Posts[i].id === id) {
//             state.Profile.Posts.splice(i, 1)
//         }
//     }
//     Render(state)
// };