import './styles.css';
import P from 'prop-types';
// Components
import SearchIcon from './SearchIcon';
import { TextInput } from '../TextInput';

export const SearchField = ({ placeholder, onChange }) => {
    return (
        <div className="SearchFieldWrapper">
            <TextInput type="text" placeholder={placeholder} onChange={onChange} />
            <SearchIcon fillColor="#3C3A36" />
        </div>
    );
};

SearchField.propTypes = {
    placeholder: P.string,
    onChange: P.func,
};
