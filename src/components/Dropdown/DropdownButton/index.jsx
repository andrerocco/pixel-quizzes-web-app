import './styles.css';
import P from 'prop-types';

export const DropdownButton = ({ label, children }) => {
    return (
        <div className="DropdownButtonWrapper">
            <button type="button">{label}</button>
            <ul>
                {children}
                <li className="DropdownItemWrapper">
                    <img
                        src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                    ></img>
                    <a>Teste</a>
                </li>
                <li className="DropdownItemWrapper">
                    <img
                        src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                    ></img>
                    <a>Testando</a>
                </li>
            </ul>
        </div>
    );
};

DropdownButton.propTypes = {
    label: P.string,
    children: P.element,
};
