import './styles.css';
import P from 'prop-types';

export const DropdownButton = ({ label, children }) => {
    return (
        <div className="DropdownButtonWrapper">
            <button type="button">{label}</button>
            <ul>{children}</ul>
        </div>
    );
};

DropdownButton.propTypes = {
    label: P.string,
    children: P.element,
};
