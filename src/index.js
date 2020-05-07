import React from 'react';
import './MainSettings.css';
import './mediaQuery.css'
import './CssModules/content.module.css'
import './CssModules/LeftMenu/menu.module.css'
import './CssModules/Profile/MyPosts/posts.module.css'
import './CssModules/DisplayView.module.css'
import './index.css'
import * as serviceWorker from './serviceWorker';
import {store} from "./Components/DataBases/Redux/Store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {MacketAppContainer} from "./Components/MainStructure/structureContainer";


const modalRoot = document.getElementById('root');

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MacketAppContainer/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
