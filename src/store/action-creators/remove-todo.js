// @flow
import {REMOVE_TODO} from '../actions';

export const removeTodo = (id: string) => ({
    id,
    type: REMOVE_TODO
});
