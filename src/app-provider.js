import React from 'react';
import {Provider} from 'react-redux';
import {App} from './app';
import {store} from './store';

export const AppProvider = () =>
    <Provider store={store}>
        <App/>
    </Provider>;

AppProvider.displayName = 'AppProvider';
