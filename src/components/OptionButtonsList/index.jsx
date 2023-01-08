import './styles.css';
import P from 'prop-types';
import { useState } from 'react';
import { OptionButton } from '../OptionButton';

export const OptionButtonsList = ({
    optionsList,
    correctAnswer,
    listGap,
    bulletType = 'none',
    onAnswer,
    onRightAnswer,
    onWrongAnswer,
    className,
    id,
}) => {
    // The isActive state is used to disable the form from accepting more answers
    const [isActive, setIsActive] = useState(true);

    function handleAnswer(event, isCorrectAnswer) {
        // As the form can only be answered once, the isActive state is used to disable the form after the user clicks on an answer
        setIsActive(false);
        onAnswer(); // Callsback the onAnswer function passed as prop
        isCorrectAnswer ? onRightAnswer() : onWrongAnswer(); // Callsback the onRightAnswer or onWrongAnswer function passed as prop
    }

    return (
        <form className={`OptionButtonsListWrapper ` + className} id={id} style={{ gap: listGap }}>
            {optionsList.map((option, index) => {
                let isCorrectAnswer = index === correctAnswer - 1 ? true : false;

                return (
                    <OptionButton
                        key={index}
                        index={index}
                        isAnswer={isCorrectAnswer}
                        isActive={isActive}
                        bulletType={bulletType}
                        onClick={(e) => handleAnswer(e, isCorrectAnswer)}
                    >
                        {option}
                    </OptionButton>
                );
            })}
        </form>
    );
};

OptionButtonsList.propTypes = {
    optionsList: P.array.isRequired,
    correctAnswer: P.number.isRequired,
    listGap: P.string,
    bulletType: P.oneOf(['number', 'alphabet', 'none']),
    onAnswer: P.func,
    onRightAnswer: P.func,
    onWrongAnswer: P.func,
    className: P.string,
    id: P.string,
};
