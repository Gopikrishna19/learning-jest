import PropTypes from 'prop-types';
import React, {Component} from 'react';

export class AddTodo extends Component {
    constructor() {
        super();
        this.state = {todo: ''};
    }

    submitOnEnter = event => event.key === 'Enter' && this.handleClick();
    handleChange = event => this.setState({todo: event.target.value});
    handleClick = () => {
        if (this.state.todo.replace(/\s/g, '')) {
            this.props.onAdd(this.state.todo);
            this.setState({todo: ''});
        }
    };

    render() {
        return (
            <div>
                <input
                    autoFocus={true}
                    onKeyPress={this.submitOnEnter}
                    onChange={this.handleChange}
                    type='text'
                    value={this.state.todo}
                />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }

}

AddTodo.displayName = 'AddTodo';
AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};
