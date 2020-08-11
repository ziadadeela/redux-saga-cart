import React from 'react';
import {App} from './src/components'
import reactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom";


reactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('AppContainer')
);