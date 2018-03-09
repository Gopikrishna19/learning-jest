import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppProvider} from './app-provider';
import './index.scss';

ReactDOM.render(<AppProvider/>, document.getElementById('app'));
