import React from 'react';
import Figure from './components/figure';
import Word from './components/word';
import Letter from './components/letter';
import Popup from './components/popup';
import './style.scss';
import { useToasts } from 'react-toast-notifications';
import Button from '../../shared/forms/button';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { currentGameRequest, newGameRequest, guessRequest } from '../../queries/game.queries';
import { maxGuesses } from '../../helpers';

const gameKey = 'game';

const Home = () => {
    const { addToast } = useToasts();
    const queryClient = useQueryClient();

    // current game
    const { data: game } = useQuery(gameKey, currentGameRequest, {
        refetchOnWindowFocus: false,
        initialData: {
            word: '',
            guessesLeft: maxGuesses,
            guesses: [],
            originalWord: '',
        },
        onError: (e) => {
            addToast(e.message, { appearance: 'error', autoDismiss: true });
        },
    });

    const { mutate: guessMutate } = useMutation(guessRequest, {
        onError: (e) => {
            addToast(e.message, { appearance: 'error', autoDismiss: true });
        },
        onSuccess: (res) => {
            queryClient.setQueryData(gameKey, (prev) => {
                return {
                    ...prev,
                    ...res,
                };
            });
        },
    });

    // guess the letter
    async function guess(letter) {
        try {
            await guessMutate(letter);
        } catch (e) {
            console.error(e);
        }
    }

    // reset game
    async function newGame() {
        try {
            await newGameMutate();
        } catch (e) {
            console.error(e);
        }
    }

    const { mutate: newGameMutate } = useMutation(newGameRequest, {
        onError: (e) => {
            addToast(e.message, { appearance: 'error', autoDismiss: true });
        },
        onSuccess: (res) => {
            queryClient.setQueryData(gameKey, (prev) => {
                return {
                    ...prev,
                    ...res,
                };
            });
        },
    });

    return (
        <>
            <main className="container-fluid text-center d-flex justify-content-center main-home">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center main-home-partition">
                        <Figure guessesLeft={game.guessesLeft} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center main-home-partition">
                        <div>
                            <Button title={'New Game'} action={newGame} btnClassname={'btn btn-primary mb-5'} />

                            <div className="mb-3">Guesses left : {game.guessesLeft}</div>
                            <Word content={game.word} />
                            <Letter guesses={game.guesses} onClick={guess} />
                        </div>
                    </div>
                </div>
            </main>
            <Popup word={game.word} originalWord={game.originalWord} guessesLeft={game.guessesLeft} onClick={newGame} />
        </>
    );
};
export default Home;
