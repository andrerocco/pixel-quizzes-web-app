import './styles.css';
import P from 'prop-types';
// Assets
import previousButton from './PreviousIcon/previous-button.svg';

export const PreviousButton = ({ onClick, buttonSrc, imgAltText }) => {
    return (
        <a className="PreviousButtonWrapper" onClick={onClick}>
            <img
                className="previous-icon"
                src={buttonSrc ? buttonSrc : previousButton}
                alt={imgAltText ? imgAltText : 'Go back'}
            />
        </a>
    );
};

PreviousButton.propTypes = {
    onClick: P.func,
    buttonSrc: P.string,
    imgAltText: P.string,
};
