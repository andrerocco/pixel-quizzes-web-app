import './styles.css';
import P from 'prop-types';

export const Button = ({ label, type = 'button', onClick, style, className, ...props }) => {
    return (
        <div className="ButtonWrapper">
            <button className={`button ` + className} type={type} style={style} onClick={onClick} {...props}>
                {label}
            </button>
        </div>
    );
};

Button.propTypes = {
    label: P.string.isRequired,
    type: P.oneOf(['button', 'submit', 'reset']),
    onClick: P.func,
    style: P.object,
    className: P.string,
};
