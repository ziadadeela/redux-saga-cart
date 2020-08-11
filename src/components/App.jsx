import {getStore} from '../getStore';
import React from 'react';
import {Provider} from 'react-redux'
import {getCurrentUserInfo} from '../actions'
import {HashRouter as Router} from "react-router-dom";
import {Routes} from "./Routes/Routes";
import BlockUI from "./BlockUI/BlockUI";

const store = getStore();
export const App = () => (
    <div>
        <Provider store={store}>
            <BlockUI/>
            <Router>
                <Routes/>
            </Router>
        </Provider>
    </div>
);

store.dispatch(getCurrentUserInfo(`U10000`));
