import './styles.css';
import P from 'prop-types';

export const TextInput = ({ type, placeholder, onChange, ...props }) => {
    return (
        <div className="TextInputWrapper">
            <input
                type={type ? type : 'text'}
                placeholder={placeholder ? placeholder : ''}
                onChange={onChange}
                {...props}
            ></input>
        </div>
    );
};

TextInput.propTypes = {
    type: P.string,
    placeholder: P.string,
    onChange: P.func,
};
