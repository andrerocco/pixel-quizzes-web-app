import './styles.css';
import P from 'prop-types';

export const QuizCard = ({ cardImage, difficulty, title, description }) => {
    return (
        <div className="QuizCardWrapper">
            <div className="card-image" style={{ backgroundImage: `url(${cardImage})` }}>
                <h6 className="quiz-difficulty">{difficulty.toUpperCase()}</h6>
            </div>
            <div className="card-information">
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
    description: P.string,
};
