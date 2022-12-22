import './styles.css';
import P from 'prop-types';

export const TextInput = ({ type, placeholder, id, className, onChange }) => (
	<input
		type={type ? type : 'text'}
		placeholder={placeholder ? placeholder : ''}
		id={id}
		className={className}
		onChange={onChange}
	></input>
);

TextInput.propTypes = {
	type: P.string,
	placeholder: P.string,
	id: P.string.isRequired,
	className: P.string,
	onChange: P.func,
};
