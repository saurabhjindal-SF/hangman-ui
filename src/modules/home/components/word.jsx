import React from 'react';
import './word.scss';

const Word = (props) => {
    // split from space and map through all the words
    const sentence = props.content.split(' ');
    const words = sentence.map((word) => word.split(''));

    // map all the alphabets with corresponding dashes
    const letters = words.map((word, i) => (
        <ul key={i}>
            {word.map((letter,i) => (
                <li key={i} className="wordLetter">
                    <span className={letter !== '_' ? 'visible' : ''}>{letter !== '_' ? letter : '*'}</span>
                </li>
            ))}
            <li>&nbsp;</li>
        </ul>
    ));

    return <div className="word">{letters}</div>;
};

export default Word;
