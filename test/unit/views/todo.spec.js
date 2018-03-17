import {shallow} from 'enzyme';
import React from 'react';
import {Todo} from '../../../src/views/todo';

describe('<Todo/>', () => {
    let todoElement,
        testProps;

    beforeEach(() => {
        testProps = {
            onRemove: jest.fn(() => null),
            onToggle: jest.fn(() => null),
            todo: {
                finished: false,
                todo: 'to buy milk'
            }
        };
        todoElement = shallow(<Todo {...testProps}/>);
    });

    it('should be a div with a class name', () => {
        expect(todoElement.getElement()).toEqual(
            <div className='todo'>
                {expect.anything()}
            </div>
        );
    });

    it('should have checkbox to toggle todo', () => {
        const input = todoElement.childAt(0);

        expect(input.getElement()).toEqual(
            <input
                onChange={expect.any(Function)}
                checked={testProps.todo.finished}
                type='checkbox'
            />
        );

        input.props().onChange();

        expect(testProps.onToggle).toHaveBeenCalledTimes(1);
        expect(testProps.onToggle).toHaveBeenCalledWith(!testProps.todo.finished);
    });

    it('should have todo text', () => {
        expect(todoElement.childAt(1).text()).toBe(testProps.todo.todo);
    });

    it('should have a button to remove the todo', () => {
        expect(todoElement.childAt(2).getElement()).toEqual(
            <button onClick={testProps.onRemove}>Remove</button>
        );
    });

    describe('after finishing the todo', () => {
        beforeEach(() => {
            testProps.todo.finished = true;
            todoElement.setProps(testProps);
        });

        it('should be a div with a class names', () => {
            expect(todoElement.getElement()).toEqual(
                <div className='todo todoFinished'>
                    {expect.anything()}
                </div>
            );
        });
    });
});
