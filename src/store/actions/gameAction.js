import client from '../../helpers/axios';
import { ActionType } from '../../helpers';

// get data for current game
const currentGame = () => async (dispatch) => {
    const res = await client.get(`current-game`);
    dispatch({
        type: ActionType.GAME,
        payload: res.data,
    });
    return res.data;
};

// reset current game and start new game
const newGame = () => async (dispatch) => {
    const res = await client.get(`new-game`);
    dispatch({
        type: ActionType.GAME,
        payload: res.data,
    });
    return res.data;
};

// guess alphabets
const guess = (body) => async (dispatch) => {
    const res = await client.post(`guess`, body);
    dispatch({
        type: ActionType.GAME,
        payload: res.data,
    });
    return res.data;
};

const actions = { currentGame, newGame, guess };
export default actions;
