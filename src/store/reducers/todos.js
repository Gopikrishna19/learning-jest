import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions';

const actionHandlers = {
    [ADD_TODO]: (state, {todo}) => state.concat({
        todo,
        finished: false
    }),
    [REMOVE_TODO]: (state, {index}) => state.slice().splice(index, 1),
    [TOGGLE_TODO]: (state, {finished, index}) => state.slice().splice(index, 1, Object.assign({}, state[index], {finished: finished}))
};

export const todos = (state = [], action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};
