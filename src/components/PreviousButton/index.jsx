import './styles.css';
import P from 'prop-types';
// Assets
import previousButton from './PreviousIcon/previous-button.svg';

export const PreviousButton = ({ id, className, onClick, buttonSrc, imgAltText, ...props }) => {
    return (
        <a id={id} className={`PreviousButtonWrapper ` + className} onClick={onClick} {...props}>
            <img
                className="previous-icon no-drag"
                src={buttonSrc ? buttonSrc : previousButton}
                alt={imgAltText ? imgAltText : 'Go back'}
            />
        </a>
    );
};

PreviousButton.propTypes = {
    id: P.string,
    className: P.string,
    onClick: P.func,
    buttonSrc: P.string,
    imgAltText: P.string,
};
