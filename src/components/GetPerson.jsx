import React, { useEffect, useState } from 'react'
import { personApi } from '../api/personaApi';


export const GetPerson = () => {

    const [persons, setPersons] = useState([])

    useEffect(() => {
        getPerson();
    }, [])
    

    const getPerson = async() => {
        const res = await personApi.get('/persons');
        console.log(res)
        setPersons( res.data );
    }

    return ( 
        <div>
            <h2>Personas registradas</h2>

            <div className="mt-5">

                <table className="table">
                    <thead>
                        <tr>
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
                                    <td>{ person.nombre }</td>
                                    <td>{ person.apellido }</td>
                                    <td>{person.edad}</td>
                                    <td>{person.genero}</td>
                                    <td>{person.pulsaciones}</td>
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
