import React, { useEffect, useState } from 'react';

const Pokemon = () => {
    const [pokedex, setPokedex] = useState([]);

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1126")
        .then(res =>{ console.log(res)
            return res.json()})
        .then(res => setPokedex(res.results))
        .catch(err => console.loge(err))
    },[]);
    
    return(
        <div>
            Pokemon!
            <ul>
                {pokedex.map((value,index) => {
                    return(<li className='ulist'>{value.name.toUpperCase()}</li>)})}
            </ul>   
        </div>
    )

}

export default Pokemon;