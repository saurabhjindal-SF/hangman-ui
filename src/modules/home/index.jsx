import React, { useEffect } from 'react';
import Figure from './components/figure';
import Word from './components/word';
import Letter from './components/letter';
import Popup from './components/popup';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import Actions from '../../store/actions';
import Button from '../../shared/forms/button';

const Home = () => {
    const game = useSelector((state) => state.game);
    const { addToast } = useToasts();
    const dispatch = useDispatch();

    // load current game for the user on login
    useEffect(() => {
        async function fetchData() {
            try {
                if (!game.loaded) { 
                    await dispatch(Actions.gameAction.currentGame());
                }
            } catch (e) {
                console.log(e);
                addToast(e.message, { appearance: 'error', autoDismiss: true });
            }
        }
        fetchData();
    }, [addToast, dispatch, game.loaded]);

    // guess the letter
    async function guess(letter) {
        try {
            await dispatch(Actions.gameAction.guess(letter));
        } catch (e) {
            console.log(e);
            addToast(e.message, { appearance: 'error', autoDismiss: true });
        }
    }

    // reset game
    async function newGame(letter) {
        try {
            await dispatch(Actions.gameAction.newGame());
        } catch (e) {
            console.log(e);
            addToast(e.message, { appearance: 'error', autoDismiss: true });
        }
    }
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
