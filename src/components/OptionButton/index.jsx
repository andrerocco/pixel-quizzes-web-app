import './styles.css';
import P from 'prop-types';
import { useState } from 'react';

export const OptionButton = ({ children, index, isAnswer, isActive = true, bulletType = 'none', onClick }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [answered, setAnswered] = useState(false);

    return (
        <div className="OptionButtonWrapper">
            <input
                type="radio"
                name="option"
                id={`option-${index}`}
                value={index}
                onClick={() => {
                    setAnswered(true);
                    onClick();
                }}
                disabled={!isActive}
            />
            <label htmlFor={`option-${index}`} id={answered && (isAnswer ? 'right-answer' : 'wrong-answer')}>
                {bulletType === 'number' && `${index + 1}. ${children}`}
                {bulletType === 'alphabet' && `${alphabet[index]}. ${children}`}
                {bulletType === 'none' && children}
            </label>
        </div>
    );
};

OptionButton.propTypes = {
    children: P.string,
    index: P.number.isRequired,
    optionText: P.string.isRequired,
    bulletType: P.oneOf(['number', 'alphabet', 'none']),
    isAnswer: P.oneOf([true, false]),
    isActive: P.oneOf([true, false]),
    onClick: P.func,
};
