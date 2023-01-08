import './styles.css';
import P from 'prop-types';
import { DifficultyLabel } from '../DifficultyLabel';

export const QuizCard = ({
    cardImage,
    difficulty,
    title,
    description,
    isAnswered,
    answeredDate,
    questionsCount,
    correctAnswersCount,
    onClick,
    hoverCursor,
}) => {
    return (
        <div className="QuizCardWrapper" onClick={onClick} style={{ cursor: hoverCursor }}>
            <div className="card-image" style={{ backgroundImage: `url(${cardImage})` }}>
                <DifficultyLabel label={difficulty} difficulty={difficulty} />
            </div>
            <div className="card-information">
                {isAnswered && (
                    <div className="card-answered-details">
                        <p className="answered-correct-count">
                            Você acertou {correctAnswersCount} de {questionsCount}
                        </p>
                        <p className="answered-date">{answeredDate}</p>
                    </div>
                )}
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

QuizCard.propTypes = {
    cardImage: P.string.isRequired,
    difficulty: P.string.isRequired,
    title: P.string.isRequired,
    isAnswered: P.bool.isRequired,
    answeredDate: P.string,
    questionsCount: P.number,
    correctAnswersCount: P.number,
    description: P.string,
    onClick: P.func,
    hoverCursor: P.string,
};
