import {getData} from './get-data';

export const setData = () =>
    async dispatch => {
        await getData();

        dispatch({type: 'DONE'});
    };
