import PropTypes from 'prop-types';
Inputs.propTypes = {
    placeholder: PropTypes.string,
    type:PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,

}
function Inputs({  placeholder,type,name,id ,...rest} ) {
    return ( <>
                    <input {...rest} id={id}  type={type} name={name} placeholder={placeholder} required/><br/>
    </> );
}

export default Inputs;