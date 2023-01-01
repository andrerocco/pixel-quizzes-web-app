import './styles.css';
import P from 'prop-types';

const QuizCard = ({ cardImage }) => {
    return (
        <div className="QuizCardWrapper">
            <img src={cardImage} />
            <h2>Title</h2>
            <p>Subtitle</p>
        </div>
    );
};

QuizCard.propTypes = {
    cardImage: P.string.isRequired,
};

export default QuizCard;
