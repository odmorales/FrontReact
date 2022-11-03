import React, { useEffect, useState } from 'react'
import { personApi } from '../api/personaApi';
import { useNavigate } from "react-router-dom";


export const GetPerson = () => {

    let navigate = useNavigate();

    const [persons, setPersons] = useState([])

    useEffect(() => {
        getPerson();
    }, [])
    

    const getPerson = async() => {
        const res = await personApi.get('/persons');
        console.log(res)
        setPersons( res.data );
    }

    function registrar(e) {
        navigate('/');
    }

    return ( 
        <div className="magin">
            <div className="row d-flex justify-content-center  align-items-center">
                <div className="col-8">
                    <h2>Personas registradas</h2>
                </div>

                <div className="col-4 d-flex justify-content-end">
                    <button className="button-rest" onClick={ registrar }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    </button>
                </div>
            </div>

            <div className="mt-5">

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Identificacion</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Genero</th>
                            <th>Pulsaciones</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            persons.map( person => (
                                <tr key={ person.id }>
                                    <td>{ person.id }</td>
                                    <td>{ person.identificacion }</td>
                                    <td>{ person.nombre }</td>
                                    <td>{ person.apellido }</td>
                                    <td>{ person.edad }</td>
                                    <td>{ person.genero }</td>
                                    <td>{ person.pulsaciones }</td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </div>
     )

}

export default GetPerson;
