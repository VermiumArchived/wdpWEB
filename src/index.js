import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';

import { history } from './_helpers';
import { App } from './app/index';

import './styles.less';

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);