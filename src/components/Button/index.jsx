import './styles.css';
import P from 'prop-types';

export const Button = ({ label, type, onPress, style }) => {
    return (
        <div className="ButtonWrapper">
            <button className="button" type={type} style={style} onClick={onPress}>
                {label}
            </button>
        </div>
    );
};

Button.propTypes = {
    label: P.string.isRequired,
    onPress: P.func,
    style: P.object,
    type: P.oneOf(['button', 'submit', 'reset']),
};
