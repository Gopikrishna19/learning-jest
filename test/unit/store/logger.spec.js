import {logger} from '../../../src/store/logger';

describe('logger', () => {
    const actionCreator = jest.fn(arg => ({
        arg,
        type: 'ACTION'
    }));
    const wrapperActionCreator = logger(actionCreator);

    beforeEach(() => jest.spyOn(console, 'log').mockImplementation(() => null));

    afterEach(() => jest.restoreAllMocks());

    it('should be a function', () => {
        expect(logger).toBeInstanceOf(Function);
    });

    it('should trigger the underlying action creator when called', () => {
        wrapperActionCreator(123);

        expect(actionCreator).toHaveBeenCalledTimes(1);
        expect(actionCreator).toHaveBeenCalledWith(123);
    });

    it('should log the given action', () => {
        wrapperActionCreator(123);

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Dispatched action: ', 'ACTION');
    });
});

