import {generateId} from '../../utils/id';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions';

const replaceTodo = function (state, id, patch) {
    const clone = state.slice();
    const index = clone.findIndex(todo => todo.id === id);

    if (patch) {
        clone.splice(index, 1, Object.assign({}, state[index], patch));
    } else {
        clone.splice(index, 1)
    }

    console.log(clone);

    return clone;
};

const actionHandlers = {
    [ADD_TODO]: (state, {todo}) => {
        const id = generateId();
        return state.concat({
            id,
            todo,
            finished: false
        });
    },
    [REMOVE_TODO]: (state, {id}) => replaceTodo(state, id),
    [TOGGLE_TODO]: (state, {finished, id}) => replaceTodo(state, id, {finished})
};

export const todos = (state = [], action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};
