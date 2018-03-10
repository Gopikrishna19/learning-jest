import {ADD_TODO} from '../actions';
import {logger} from '../logger';

export const addTodo = logger((todo: string) => ({
    todo,
    type: ADD_TODO
}));
