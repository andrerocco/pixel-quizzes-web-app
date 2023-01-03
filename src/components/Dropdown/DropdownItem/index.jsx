import './styles.css';
import P from 'prop-types';

export const DropdownItem = ({ onClick, name, imgSrc, children }) => {
    return (
        <div className="DropdownItemWrapper" onClick={onClick} name={name}>
            {imgSrc && <img src={imgSrc}></img>}
            <a>{children}</a>
        </div>
    );
};

DropdownItem.propTypes = {
    onClick: P.func,
    name: P.string,
    imgSrc: P.string,
    children: P.string.isRequired,
};
