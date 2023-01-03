import './styles.css';
import P from 'prop-types';

export const WelcomeTitle = ({ greeting, children }) => {
    return (
        <div className="WelcomeTitleWrapper">
            <p>{greeting ? greeting : 'Hello,'}</p>
            <h1>{children}</h1>
        </div>
    );
};

WelcomeTitle.propTypes = {
    greeting: P.string,
    children: P.string,
};
