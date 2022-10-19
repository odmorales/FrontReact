import { useEffect } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";

export const Formulario = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        data.pulsaciones = 0;
        axios.request({
            method: 'Post',
            url: 'http://127.0.0.1:8000/api/persona',
            data: JSON.stringify(data)
          }).then(response => {
          }).catch(err => console.log(err));
        
      }; 
    

    return <div>
        <h2>Registro persona</h2>
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

            <div>
                <label>Pulsaciones</label>
                <input disabled type="number" { ...register('pulsaciones') }></input>
            </div>
            <input type="submit" value="Registrar"></input>
        </form>
    </div>
} 

export default Formulario