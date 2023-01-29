import './styles.css';
import { useEffect, useState } from 'react';
import P from 'prop-types';
// Components
import { TextInput } from '../TextInput';
import VisibilityIcon from './VisibilityIcon';

export const PasswordInput = ({ placeholder, onChange, onEnter, required = true }) => {
    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        const onKeyPressed = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                onEnter?.();
            }
        };
        document.addEventListener('keydown', onKeyPressed);
        return () => {
            document.removeEventListener('keydown', onKeyPressed);
        };
    }, [onEnter]);

    return (
        <div className="PasswordInputWrapper">
            <TextInput
                type={isVisible ? 'text' : 'password'}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
            />
            <VisibilityIcon visibilityStatus={isVisible} onClick={(e) => changeVisibility(e)} fillColor={'#3C3A36'} />
        </div>
    );
};

PasswordInput.propTypes = {
    placeholder: P.string,
    onChange: P.func,
    onEnter: P.func,
    required: P.bool,
};
