export const logger = callback => (...args) => {
    const action = callback(...args);
    console.log('Dispatched action: ', action.type);
    return action;
};
