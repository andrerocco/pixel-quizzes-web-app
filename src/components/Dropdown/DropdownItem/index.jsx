import './styles.css';
import P from 'prop-types';

export const DropdownItem = ({ onClick, imgSrc, children }) => {
    return (
        <div className="DropdownItemWrapper" onClick={onClick}>
            {imgSrc && <img src={imgSrc}></img>}
            <a>{children}</a>
        </div>
    );
};

DropdownItem.propTypes = {
    onClick: P.func,
    imgSrc: P.string,
    children: P.string.isRequired,
};
