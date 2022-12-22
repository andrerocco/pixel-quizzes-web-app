import './styles.css';
import { useState } from 'react';
import P from 'prop-types';
// Components
import { TextInput } from '../TextInput';
import VisibilityIcon from './VisibilityIcon';

export const PasswordInput = ({ placeholder, onChange }) => {
    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    };

    return (
        <div className="PasswordInputWrapper">
            <TextInput type={isVisible ? 'text' : 'password'} placeholder={placeholder} onChange={onChange} />
            <VisibilityIcon visibilityStatus={isVisible} onClick={(e) => changeVisibility(e)} fillColor={'#3C3A36'} />
        </div>
    );
};

PasswordInput.propTypes = {
    placeholder: P.string,
    onChange: P.func,
};
