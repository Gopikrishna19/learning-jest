import {TOGGLE_TODO} from '../actions';

export const toggleTodo = (index, finished) => ({
    finished,
    index,
    type: TOGGLE_TODO
});
