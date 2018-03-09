import {REMOVE_TODO} from '../actions';

export const removeTodo = todo => ({
    todo,
    type: REMOVE_TODO
});
