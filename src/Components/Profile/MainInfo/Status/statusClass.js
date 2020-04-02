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
        if (this.props.status !== prevProps.status && this.props.status){
            this.setState({status: this.props.status})
        }
    }

    onSubmit = status => {
        // API.putStatus(status.status)
        this.props.putStatusThunk(status.status, this.props.id)
    }

    switchMode = () => {
        // debugger
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        // debugger
        return (
            <div>
                {this.state.editMode ? <form onBlur={this.switchMode} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div><Field autoFocus onBlur={this.switchMode} name={'status'} placeholder={this.state.status ? this.state.status : 'empty'} component={'input'}/></div>
                    <div><button onClick={this.switchMode}>Save</button></div>
                </form> : <h3 onClick={this.switchMode}>{this.state.status}</h3>}



            </div>
        )
    }

}

export default StatusClass
