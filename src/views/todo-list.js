import PropTypes from 'prop-types';
import React from 'react';
import {Todo} from './todo';

const handleRemove = (props, todo) => () => props.removeTodo(todo.id);
const handleToggle = (props, todo) => selection => props.toggleTodo(todo.id, selection);

export const TodoList = props =>
    <div className='todo-list'>
        {
            props.todos.map(
                todo =>
                    <Todo
                        todo={todo}
                        key={todo.id}
                        onRemove={handleRemove(props, todo)}
                        onToggle={handleToggle(props, todo)}
                    />
            )
        }
    </div>;

TodoList.displayName = 'TodoList';
TodoList.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired
};
