import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import app from './appReducer';
import goal from './goalReducer';

import config from '../config';

const appReducer = combineReducers({
    app,
    goal,
});

export default persistReducer(config, appReducer);
