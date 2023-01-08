import './styles.css';
import P from 'prop-types';

export const Button = ({ label, type = 'button', onClick, style }) => {
    return (
        <div className="ButtonWrapper">
            <button className="button" type={type} style={style} onClick={onClick}>
                {label}
            </button>
        </div>
    );
};

Button.propTypes = {
    label: P.string.isRequired,
    onClick: P.func,
    style: P.object,
    type: P.oneOf(['button', 'submit', 'reset']),
};
