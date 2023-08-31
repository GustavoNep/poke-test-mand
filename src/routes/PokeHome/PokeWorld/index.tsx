import { PokemonDTO } from "../../../models/pokemon";
import axios from "axios";
import "./styles.css";
import { useEffect, useState } from "react";
import PokeCard from "../../../components/PokeCard";
import SearchPoke from "../../../components/SearchPoke";

export default function PokeWorld() {

  const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    try {
      axios.get("https://dev-api-teste.mandarin.com.br/pokemons")
        .then((response) => {
            setPokemons(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  },[]);

  function handleSearch(searchText: string) {
    
  }


  return (
    <main>
      <section className="pokemon">
        <div className="pokemon__title">
          <h1>Mandarin Pokemon World</h1>
          <p>Search for pokemons here</p>
        </div>
        <div className="search-pokemon">
            <SearchPoke onSearch={handleSearch}/>
        </div>
        <div className="pokemon__wrapper">
            {pokemons.map(poke => (
                <PokeCard 
                    name={poke.name}
                    category={poke.category}
                    image_url={poke.image_url}
                    background_image_url={poke.background_image_url}
                />
            ))}
        </div>
      </section>
    </main>
  );
}
