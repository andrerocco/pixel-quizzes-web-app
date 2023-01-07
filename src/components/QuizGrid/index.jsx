import './styles.css';
import P from 'prop-types';
// Components
import { QuizCard } from '../QuizCard';

export const QuizGrid = ({ quizzes }) => {
    function convertDateFormat(date) {
        if (!date) return null;

        const parts = date.split(' ')[0].split('-');
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

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
                        isAnswered={quiz.is_answered}
                        answeredDate={convertDateFormat(quiz.answered_date)}
                        questionsCount={quiz.questions_count}
                        correctAnswersCount={quiz.correct_answers_count}
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
