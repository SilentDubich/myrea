import React, {useEffect, useState} from "react";
import {Field} from "redux-form";

function StatusClass(props) {
    let [mode, switchMode] = useState(false)
    let [status, switchStatus] = useState(props.currentProfile.Status)

    useEffect(() => {
        switchStatus(props.currentProfile.Status)
    }, [props.currentProfile.Status])

    let onSubmit = status => {
        let promise = props.putStatusThunk(status.status, props.currentProfile.id)
        Promise.all([promise])
            .then(() => {
                switchMode(false);
            })
    }


    return (
        <div>
            {
                mode ?
                <form onSubmit={props.handleSubmit(onSubmit)}>
                    <div>
                        <Field autoFocus
                               name={'status'}
                               component={'input'}
                               type={'text'}
                        />
                    </div>
                    <div>
                        <button>Save</button>
                    </div>
                </form>
                :
                <h3 onClick={() => {if (props.myProfile) switchMode(true)}}>{status ? status : 'Change status'}</h3>
            }
        </div>
    )
}


// class StatusClass extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (this.props.status !== prevProps.status && this.props.status) {
//             this.setState({status: this.props.status})
//         }
//     }
//     onSubmit = status => {
//         let promise = this.props.putStatusThunk(status.status, this.props.id)
//             Promise.all([promise])
//                 .then(() => {
//                     this.setState({editMode: !this.state.editMode})
//                 })
//     }
//     switchMode = () => {
//         this.setState({editMode: !this.state.editMode})
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.editMode ?
//                     <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
//                         <div>
//                             <Field autoFocus
//                                    name={'status'}
//                                    component={'input'}
//                                    type={'text'}
//                             />
//                         </div>
//                         <div>
//                             <button>Save</button>
//                         </div>
//                     </form>
//                     :
//                     <h3 onClick={this.switchMode}>{this.state.status ? this.state.status : 'Change status'}</h3>
//                 }
//             </div>
//         )
//     }
// }

export default StatusClass
