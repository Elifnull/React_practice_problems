import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonAxios = () => {
    const [pokedex, setPokedex] = useState([]);

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1126") //pokemon api is basicly a library with keyvalues
        .then(res => {
            console.log(res);
            return setPokedex(res.data.results);})
        .catch(err => console.log(err))
    },[]);
    
    return(
        <div>
            <ul>
                <h2>Pokemon! (Axios)</h2>
                {pokedex.map((value,index) => {
                    return(<li className='ulist'>{value.name.toUpperCase()}</li>)})}
            </ul>   
        </div>
    )

}

export default PokemonAxios;