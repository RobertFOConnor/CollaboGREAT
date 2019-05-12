import {createAction} from 'redux-actions';

const base = 'appActions/';

export const dataRefreshing = createAction(`${base}DATA_REFRESHING`);
