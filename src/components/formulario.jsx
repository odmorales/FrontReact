import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const Formulario = () => {

    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        axios.post('http://localhost:4040/api/persona', data)
            .then( response => {
                Swal.fire(
                    'Good job!',
                    response.nombre + ' fué guardado correctamente. ',
                    'success'
                );
                
                reset.apply();
            });
    }; 

    function consultar(e) {
        navigate('/consultar');
    }
    

    return <div className="magin">
        <div className="row d-flex justify-content-center  align-items-center">
            <div className="col">
                <h2>Registro persona</h2>
            </div>

            <div className="col d-flex justify-content-end col-button">
                <button className="button-rest" onClick={ consultar }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>
        </div>

        <form onSubmit={ handleSubmit(onSubmit) }>
            <div id="contenedor">
                <div>
                    <label>Identificación</label>
                    <input type="text" { ...register('identificacion', {
                        required: true,
                        maxLength: 12
                    })}></input>
                    { errors.identificacion?.type === 'required' && <p>El campo identificacion 
                        es requerido</p>}
                    { errors.identificacion?.type === 'maxLength' && <p>El campo identificacion
                        debe tener menos de 12 caracteres</p>}
                </div>
                <div>
                    <label>Nombre</label>
                    <input type="text" { ...register('nombre') }></input>
                </div>
            </div>
            <div id="contenedor">
                <div>
                    <label>Apellido</label>
                    <input type="text" { ...register('apellido') }></input>
                </div>
                <div>
                    <label>Direccion</label>
                    <input type="text"></input>
                </div>
            </div>
            
            <div id="contenedor">
                <div>
                    <label>Edad</label>
                    <input type="number" { ...register('edad', {
                        required: true,
                    })}></input>
                    { errors.edad?.type === 'required' && <p>La edad es requerida</p>}
                </div>
                <div>
                    <label>Sexo</label>
                    <select defaultValue={"DEFAULT"} { ...register('genero') }>
                        <option value="DEFAULT">Seleccione</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>
            </div>

            <input className="input" type="submit" value="Registrar"></input>
        </form>
    </div>
} 

export default Formulario