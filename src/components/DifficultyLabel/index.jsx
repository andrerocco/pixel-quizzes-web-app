import './styles.css';
import P from 'prop-types';

/* eslint-disable no-unused-vars */
export const DifficultyLabel = ({ label, difficulty, className, ...props }) => {
    const backgroundColor = difficulty == 'easy' ? '#65AAEA' : difficulty == 'medium' ? '#EAB565' : '#EF4949';

    return (
        <h5
            className={`DifficultyLabelWrapper no-select ` + className}
            style={{ backgroundColor: backgroundColor }}
            {...props}
        >
            {`${label}`.toUpperCase()}
        </h5>
    );
};

DifficultyLabel.propTypes = {
    label: P.string.isRequired,
    difficulty: P.oneOf(['easy', 'medium', 'hard']).isRequired,
    className: P.string,
};
