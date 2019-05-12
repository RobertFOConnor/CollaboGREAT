import {handleActions} from 'redux-actions';
import {addGoal, removeGoal, clearGoals} from '../actions/goalActions';

const initialState = {
    goals: [],
};

export default handleActions(
    {
        [addGoal]: (state, {payload}) => ({
            ...state,
            goals: [...state.goals,
                {
                    key: state.goals.length.toString(),
                    text: payload,
                    completed: false
                }
            ],
        }),
        [removeGoal]: (state, {payload: index}) => ({
            ...state,
            goals: [...state.goals.filter(value => value.key !== index.toString())],
        }),
        [clearGoals]: state => ({
            ...state,
            goals: [],
        }),
    },
    initialState,
);
