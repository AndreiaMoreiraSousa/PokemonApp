import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Pokeinfo = () => {
    const params = useParams();
    const history = useHistory();
    const [data,setData]=useState(null);
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
        const getPokemonId = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            setData(response.data);
        }
        if(params.id) {
           getPokemonId();   
        }
    },[params.id])

    let favouritePokemonsArray = [];

    const addPokemonToLocalStore = (pokemon) => {
        favouritePokemonsArray.push(pokemon);
        localStorage.setItem('favouritePokemons', JSON.stringify({favouritePokemonsArray}));
        }
     

      const handleChange = () => {
        setChecked(!checked);
        addPokemonToLocalStore(data);
      
      };

    return (
            (!data) ? "" : (
                <div>
                    <h1 className="pokemonInfoName">{data.name}</h1>
                    <img className="pokemonInfoImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <label className="favourite">
                        <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                        />
                         Favourite
                    </label>
                    <div className="abilities">
                        {
                            data.abilities.map((poke, abilityIndex)=>{
                                return(
                                     <div className="group" key={abilityIndex}>
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map((poke, statIndex)=>{
                                return(
                                   <h3 key={statIndex}>{poke.stat.name} : {poke.base_stat}</h3>
                                )
                            })
                        }
                    </div>
                    <button className="btn-goBack" onClick={() => history.push('/')}>Go Back</button>
                </div>
            )
    )
}
export default Pokeinfo