import {TOGGLE_TODO} from '../actions';
import {logger} from '../logger';

export const toggleTodo = logger((id: string, finished: boolean) => ({
    finished,
    id,
    type: TOGGLE_TODO
}));
