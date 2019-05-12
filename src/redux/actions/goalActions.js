import {createAction} from 'redux-actions';

const base = 'goalActions/';

export const addGoal = createAction(`${base}ADD_GOAL`);
export const removeGoal = createAction(`${base}REMOVE_GOAL`);
export const setCompletedGoal = createAction(`${base}SET_COMPLETED_GOAL`);
export const setIncompletedGoal = createAction(`${base}SET_INCOMPLETED_GOAL`);
export const clearGoals = createAction(`${base}CLEAR_GOALS`);
