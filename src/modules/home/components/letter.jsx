import React from 'react';
import Button from '../../../shared/forms/button';
import './letter.scss';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// iterate over all alphabets and disable those which have been already guessed
const Letter = (props) => (
    <div>
        {letters.map((letter) => (
            <Button
                key={letter}
                title={letter}
                disabled={props.guesses.includes(letter) ? true : false}
                action={() => props.onClick({letter})}
                btnClassname={"btn btn-primary btn-letter mx-1 my-1"}
            />
        ))}
    </div>
);

export default Letter;
