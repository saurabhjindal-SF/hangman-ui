import client from '../helpers/axios';

// get data for current game
export const currentGameRequest = async () => {
    const res = await client.get(`game/last`);
    return res.data;
};

// reset current game and start a new game
export const newGameRequest = async () => {
    const res = await client.get(`game`);
    return res.data;
};

// guess alphabets
export const guessRequest = async (body) => {
    const res = await client.post(`guess`, body);
    return res.data;
};

