import React from 'react';
import PropTypes from 'prop-types';

Error.propTypes = {
    
};

function Error({mensaje}) {
    return (
        <p className="red darken-4 error"> {mensaje}</p>
    );
}

export default Error;