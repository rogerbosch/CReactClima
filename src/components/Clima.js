import React from 'react';
import PropTypes from 'prop-types';

Clima.propTypes = {

};

function Clima({resultado}) {
    const {name, main} = resultado;

    const kelvin = 273.15;

    if(!name) return null;
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {parseFloat((main.temp - kelvin).toString(),10).toFixed()} <span> &#x2103; </span>
                </p>
                <p>Temperatura máxima
                    {parseFloat((main.temp_max - kelvin).toString(),10).toFixed()} <span> &#x2103; </span>
                </p>
                <p>Temperatura minima
                    {parseFloat((main.temp_min - kelvin).toString(),10).toFixed()} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

export default Clima;