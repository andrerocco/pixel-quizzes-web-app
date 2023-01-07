import './styles.css';
import P from 'prop-types';
// Assets
import notFoundIllustration from '../../assets/illustrations/quiz-not-found-illustration.svg';

export const QuizNotFound = ({ message, children }) => {
    return (
        <div className="QuizNotFoundWrapper">
            <img src={notFoundIllustration} className="no-drag" alt="Quiz not found" />
            <h3>{message}</h3>
            <p>{children}</p>
        </div>
    );
};

QuizNotFound.propTypes = {
    message: P.string.isRequired,
    children: P.string.isRequired,
};
