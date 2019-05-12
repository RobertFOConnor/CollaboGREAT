import {handleActions} from 'redux-actions';
import {dataRefreshing} from '../actions/appActions';

const initialState = {
    dataRefreshed: null,
};

export default handleActions(
    {
        [dataRefreshing]: state => ({
            ...state,
            dataRefreshed: true,
        }),
    },
    initialState,
);
