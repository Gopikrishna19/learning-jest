import {connect} from 'react-redux';
import {addTodo} from '../store/action-creators/add-todo';
import {AddTodo as AddTodoContainer} from '../views/add-todo';

export const AddTodo = connect(
    () => ({}),
    {onAdd: addTodo}
)(AddTodoContainer);
