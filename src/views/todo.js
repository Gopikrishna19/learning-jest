import PropTypes from 'prop-types';
import React from 'react';

const handleChange = props => () => props.onToggle(!props.todo.finished);

export const Todo = props =>
    <div className={`todo ${props.todo.finished ? 'finished' : ''}`}>
        <input
            onChange={handleChange(props)}
            checked={props.todo.finished}
            type='checkbox'
        />
        {props.todo.todo}
        <button onClick={props.onRemove}>Remove</button>
    </div>;

Todo.displayName = 'Todo';
Todo.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
};
