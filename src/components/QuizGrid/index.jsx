import './styles.css';
import P from 'prop-types';
// Components
import { QuizCard } from '../QuizCard';

export const QuizGrid = ({ quizzes }) => {
    return (
        <div className="QuizGridWrapper">
            {quizzes.map((quiz) => {
                return (
                    <QuizCard
                        key={quiz.id}
                        cardImage={quiz.banner_image}
                        difficulty={quiz.difficulty}
                        title={quiz.title}
                        description={quiz.short_description}
                        hoverCursor="pointer"
                    />
                );
            })}
        </div>
    );
};

QuizGrid.propTypes = {
    quizzes: P.array,
};
