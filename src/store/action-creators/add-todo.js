import {ADD_TODO} from '../actions';

export const addTodo = todo => ({
    todo,
    type: ADD_TODO
});
