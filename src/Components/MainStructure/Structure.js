import Text from "../mainText";
import React from "react";
import {UpperClassContainerTwo} from "../UpperMenu/upperClassContainerX2";

class MacketApp extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <UpperClassContainerTwo/>
                </div>
                <div className='container'>
                    <Text
                        dispatch={this.props.dispatch}
                        state={this.props.state}
                    />
                </div>
            </div>

        )
    }
}

// function MacketApp(props){
//     // debugger
//     return(
//         <div>
//             <div>
//                 {/*<Navigate/>*/}
//                 <UpperClassContainerTwo/>
//             </div>
//             <div className='container'>
//                 <Text
//                     dispatch={props.dispatch}
//                     state={props.state}
//                 />
//             </div>
//         </div>
//     )
// }
//
export default MacketApp
