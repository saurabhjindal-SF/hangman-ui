import { combineReducers } from 'redux';
import { ActionType } from '../../helpers/constants';

import game from './gameReducer';
const appReducer = combineReducers({
    game,
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === ActionType.LOGOUT) {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
