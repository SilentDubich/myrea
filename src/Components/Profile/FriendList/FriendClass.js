import React from "react";
import Content from "../../../CssModules/content.module.css";
import Friends from '../../../CssModules/Profile/FriendList/Friends.module.css';
import MyFriend from "./MyFriend/FriendLittleAva";


class FriendListClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${Content.content__menu_decorationBlocks}`}>
                <p className={Friends.font__size}>My friends: <span>{this.props.state.friendsReducer.length}</span></p>
                <div className={Friends.display__grid}>
                    {/*{this.all.map(friend => <MyFriend name={friend.Name} img={friend.Avatar}/>)}*/}
                    {this.props.state.friendsReducer.sort(() => Math.random() - 0.5).map(friend => <MyFriend name={friend.Name} img={friend.Avatar}/>)}
                </div>
            </div>
        )
    }

}

export default FriendListClass
