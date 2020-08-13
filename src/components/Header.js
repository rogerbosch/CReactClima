import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header({titulo}) {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken2">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    );
}

export default Header;