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
import MacketApp from "./Components/MainStructure/Structure";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let Render = (state) => {
    // debugger
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <MacketApp
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


Render(store.getState());

store.subscribe(() => {
    let state = store.getState();
    Render(state)
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
