import React, {useState} from "react";
import {Field} from "redux-form";


function ChangeName(props) {
    let [mode, switchMode] = useState(false);
    return (
        <div>
            <span>Name: </span>
            <div>
                <Field autoFocus
                       name={'FullName'}
                       component={'input'}
                       type={'text'}
                />
            </div>
        </div>
    )
}

// class ChangeNameClass extends React.Component {
//     state = {
//         editMode: false,
//     };
//     switchMode() {
//         // debugger
//         this.setState({
//             editMode: !this.state.editMode
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <p>Change name:</p>
//                     {this.state.editMode ?
//                         <input onBlur={this.switchMode.bind(this)} placeholder='Change your name'/>
//                         :
//                         <span onClick={this.switchMode.bind(this)}>Name</span>
//                     }
//
//                 </div>
//             </div>
//         )
//     }
// }

export default ChangeName
