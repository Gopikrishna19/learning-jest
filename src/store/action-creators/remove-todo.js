import {REMOVE_TODO} from '../actions';
import {logger} from '../logger';

export const removeTodo = logger((id: string) => ({
    id,
    type: REMOVE_TODO
}));
