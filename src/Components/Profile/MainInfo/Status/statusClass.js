import React from "react";
import {Field} from "redux-form";
import {API} from "../../../DataBases/API/API";
import {putStatusThunk} from "../../../DataBases/Reducers/ProfileInfoReducer";

class StatusClass extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        if (this.props.status !== prevProps.status && this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    onSubmit = status => {
        // API.putStatus(status.status)
        // debugger
        let promise = this.props.putStatusThunk(status.status, this.props.id)
            Promise.all([promise])
                .then(() => {
                    this.setState({editMode: !this.state.editMode})
                })

    }

    switchMode = () => {
        // debugger
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        // debugger
        return (
            <div>
                {this.state.editMode ?
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div>
                            <Field autoFocus name={'status'}
                                   placeholder={this.state.status ? this.state.status : 'empty'}
                                   component={'input'}
                                   type={'text'}
                                   value={this.state.status}
                                   forwardRef={false}
                                // format={this.state.status}
                            >
                            </Field>
                        </div>
                        <div>
                            <button>Save</button>
                        </div>
                    </form>
                    :
                    <h3 onClick={this.switchMode}>{this.state.status}</h3>
                }


            </div>
        )
    }

}

export default StatusClass
