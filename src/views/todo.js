import PropTypes from 'prop-types';
import React from 'react';
import {todoFinished} from './todo.scss';

const handleChange = props => () => props.onToggle(!props.todo.finished);

const getClassNames = props => [
    'todo',
    props.todo.finished ? todoFinished : ''
]
    .filter(name => name)
    .join(' ');

export const Todo = props =>
    <div className={getClassNames(props)}>
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
