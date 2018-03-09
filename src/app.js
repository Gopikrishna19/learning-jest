import React from 'react';
import {AddTodo} from './connectors/add-todo';
import {FinishedList} from './connectors/finished-list';
import {OpenList} from './connectors/open-list';

export const App = () =>
    <div>
        <h1>My todo app!</h1>
        <AddTodo/>
        <FinishedList/>
        <OpenList/>
    </div>;

App.displayName = 'App';
