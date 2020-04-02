import React from "react";


class ChangeNameClass extends React.Component {
    state = {
        editMode: false,
    };
    switchMode() {
        // debugger
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                <div>
                    <p>Change name:</p>
                    {this.state.editMode ?
                        <input onBlur={this.switchMode.bind(this)} placeholder='Change your name'/>
                        :
                        <span onClick={this.switchMode.bind(this)}>Name</span>
                    }

                </div>
            </div>
        )
    }
}

export default ChangeNameClass
