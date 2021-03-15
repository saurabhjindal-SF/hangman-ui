import { maxGuesses,ActionType } from '../../helpers';


const initialState = {
    word: '',
    guessesLeft: maxGuesses,
    guesses: [],
    originalWord: '',
    loaded: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GAME: {
            let guesses = [];
            if (action && action.payload && action.payload.guesses) {
                guesses = action.payload.guesses.split(',');
            }
            return { ...state, ...action.payload, guesses, loaded: true };
        }
        default:
            return state;
    }
};

export default reducer;
