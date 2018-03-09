// @flow
import {ADD_TODO} from '../actions';

export const addTodo = (todo: string) => ({
    todo,
    type: ADD_TODO
});
