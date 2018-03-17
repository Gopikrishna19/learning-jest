import {addTodo} from '../../../../src/store/action-creators/add-todo';
import * as logger from '../../../../src/store/logger';

jest.mock('../../../../src/store/logger', () => ({
    logger: jest.fn().mockImplementation(callback => callback)
}));

describe('addTodo', () => {
    let action;

    beforeEach(() => {
        action = addTodo(123);
    });

    it('should inject logger', () => {
        expect(logger.logger).toHaveBeenCalledTimes(1);
        expect(logger.logger).toHaveBeenCalledWith(addTodo);
    });

    it('should return ADD_TODO action', () => {
        expect(action).toEqual({
            todo: 123,
            type: 'ADD_TODO'
        });
    });
});
