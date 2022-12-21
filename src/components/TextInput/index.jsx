import './styles.css';
import P from 'prop-types';

export const TextInput = ({ id, name, placeholder }) => (
	<input type="text" className="text-input" id={id} name={name} placeholder={placeholder ? placeholder : ''}></input>
);

TextInput.propTypes = {
	id: P.string.isRequired,
	name: P.string.isRequired,
	placeholder: P.string,
};
