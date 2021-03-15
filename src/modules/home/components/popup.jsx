import React from 'react';
import Button from '../../../shared/forms/button';
import './popup.scss';

const Popup = ({ guessesLeft, originalWord, word ,onClick}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';

    // if there are no more dashes in the word it means user has won
    if (!word.includes('_')) {
        finalMessage = 'Congratulations! You won!';
    // if no guesses are left user has lost
    } else if (!guessesLeft) {
        finalMessage = 'Unfortunately you lost.';
        finalMessageRevealWord = `...the word was: ${originalWord}`;
    }

    return (
        <div className="popup-container" style={finalMessage !== '' && word ? { display: 'flex' } : {}}>
            <div className="popup">
                <h2 className="font-weight-bold">{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <Button title={'Play Again'} action={onClick}  />
            </div>
        </div>
    );
};

export default Popup;
