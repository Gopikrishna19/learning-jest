import {connect} from 'react-redux';
import {removeTodo} from '../store/action-creators/remove-todo';
import {toggleTodo} from '../store/action-creators/toggle-todo';
import {TodoList} from '../views/todo-list';

export const OpenList = connect(
    state => ({todos: state.todos.filter(todo => !todo.finished)}),
    {
        removeTodo,
        toggleTodo
    }
)(TodoList);
