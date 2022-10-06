import React from "react";
import { useHistory } from "react-router-dom";

const FavouritePokemons = () => {
    const history = useHistory();
    const currentlyStorage = localStorage.getItem('favouritePokemons');
    const parseStorage = JSON.parse(currentlyStorage);
    const transformFavouritePokemonsInArray = [parseStorage];
    const favouritePokemonsArray = transformFavouritePokemonsInArray[0] !== null && transformFavouritePokemonsInArray[0].favouritePokemonsArray;
 
    return (
       currentlyStorage === null ? <h1 className="NoResultTitle">No results yet ...</h1> : 
       favouritePokemonsArray.map((item) => {
            return (

                <>
                    <h1 className="FavouritePokemonsTitle">Favourite Pokemons</h1>
                    <div className="container">
                        <div className="content">
                            <div className="card" key={item.id}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    </div>
                    <button className="btn-goBack-favourite" onClick={() => history.push('/')}>Go Back</button>
                </>
            )
        })
    )
}
export default FavouritePokemons;