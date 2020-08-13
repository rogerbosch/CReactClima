import React, {useState} from 'react';
import PropTypes from 'prop-types';

Formulario.propTypes = {
    
};

function Formulario(props) {
    const [] = useState({});
    return (
            <form>
                <div className="input-field col s12">
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                    />
                    <label htmlFor="ciudad">Ciudad: </label>
                </div>

                <div className="input-field col s12">
                    <select
                        name="pais"
                        id="pais"
                    >
                        <option value="">-- Seleccione un país --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="pais">País: </label>
                </div>

                <div className="input-field col s12">
                    <input
                        type="submit"
                        value="Buscar Clima"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    />
                </div>
            </form>
    );
}

export default Formulario;