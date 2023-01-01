import './styles.css';
import P from 'prop-types';
// Components
import SearchIcon from './SearchIcon';

export const SearchField = ({ placeholder, onChange, ...props }) => {
    return (
        <div className="SearchFieldWrapper">
            <input type="text" placeholder={placeholder} onChange={onChange} {...props} />
            <SearchIcon fillColor="#3C3A36" />
        </div>
    );
};

SearchField.propTypes = {
    placeholder: P.string,
    onChange: P.func,
    props: P.object,
};
