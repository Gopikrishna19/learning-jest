import {setData} from '../../../../src/store/action-creators/set-data';
import * as getData from '../../../../src/store/action-creators/get-data';

describe('setData', () => {
    let dispatch;

    beforeEach(() => {
        dispatch = jest.fn(() => null);
        jest.spyOn(getData, 'getData').mockImplementation(() => new Promise(() => null));
    });

    afterEach(() => jest.restoreAllMocks());

    it('should be a thunk', () => {
        expect(setData()).toBeInstanceOf(Function);
    });

    describe('when setting data', () => {
        beforeEach(() => {
            setData()(dispatch);
        });

        it('should get the data', () => {
            expect(getData.getData).toHaveBeenCalledTimes(1);
            expect(getData.getData).toHaveBeenCalledWith();
        });

        it('should not have dispatched any actions yet', () => {
            expect(dispatch).not.toHaveBeenCalled();
        });
    });

    describe('when successfully got the data', () => {
        beforeEach(() => {
            getData.getData.mockImplementation(() => Promise.resolve({}));
            setData()(dispatch);
        });

        it('should dispatch DONE', () => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({type: 'DONE'});
        });
    });
});
