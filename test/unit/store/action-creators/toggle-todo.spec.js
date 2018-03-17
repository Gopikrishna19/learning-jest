import {toggleTodo} from '../../../../src/store/action-creators/toggle-todo';
import * as logger from '../../../../src/store/logger';

jest.mock('../../../../src/store/logger', () => ({
    logger: jest.fn().mockImplementation(callback => callback)
}));

describe('toggleTodo', () => {
    let action,
        finished;

    beforeEach(() => {
        finished = true;
        action = toggleTodo(123, finished);
    });

    it('should inject logger', () => {
        expect(logger.logger).toHaveBeenCalledTimes(1);
        expect(logger.logger).toHaveBeenCalledWith(toggleTodo);
    });

    it('should return TOGGLE_TODO action', () => {
        expect(action).toEqual({
            id: 123,
            finished,
            type: 'TOGGLE_TODO'
        });
    });
});
