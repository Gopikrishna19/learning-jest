import {TOGGLE_TODO} from '../actions';

export const toggleTodo = (id: string, finished: boolean) => ({
    finished,
    id,
    type: TOGGLE_TODO
});
