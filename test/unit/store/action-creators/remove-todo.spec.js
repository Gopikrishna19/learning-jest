import {removeTodo} from '../../../../src/store/action-creators/remove-todo';
import * as logger from '../../../../src/store/logger';

jest.mock('../../../../src/store/logger', () => ({
    logger: jest.fn().mockImplementation(callback => callback)
}));

describe('removeTodo', () => {
    let action;

    beforeEach(() => {
        action = removeTodo(123);
    });

    it('should inject logger', () => {
        expect(logger.logger).toHaveBeenCalledTimes(1);
        expect(logger.logger).toHaveBeenCalledWith(removeTodo);
    });

    it('should return REMOVE_TODO action', () => {
        expect(action).toEqual({
            id: 123,
            type: 'REMOVE_TODO'
        });
    });
});
