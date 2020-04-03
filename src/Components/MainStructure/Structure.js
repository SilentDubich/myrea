import Navigate from "../UpperMenu/upper";
import Text from "../mainText";
import React from "react";
import {UpperClassContainerTwo} from "../UpperMenu/upperClassContainerX2";
import {API} from "../DataBases/API/API";
import {loadProfileData, logData} from "../DataBases/Reducers/LoginReducer";
import {getMyProfileThunk} from "../DataBases/Reducers/ProfileInfoReducer";
import Preloader from "../Pre-loaders/Preloader";

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
