import { PokemonDTO } from "../../../models/pokemon";
import axios from "axios";
import "./styles.css";
import { useEffect, useState } from "react";
import PokeCard from "../../../components/PokeCard";
import SearchPoke from "../../../components/SearchPoke";
import { AxiosRequestConfig } from "axios";

type QueryParams = {
    name: string,
}

export default function PokeWorld() {

  const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({name: ""})

  useEffect(() => {
    try {
        const config : AxiosRequestConfig = {
            method: "GET",
            baseURL: "https://dev-api-teste.mandarin.com.br",
            url: "/pokemons",
            params: {
                name: queryParams.name,
            }
        }

      axios(config)
        .then((response) => {
            setPokemons(response.data);
            console.log(response.data)
        });
    } catch (error) {
      console.log(error);
    }
  },[queryParams.name]);

  function handleSearch(searchText: string) {
    setPokemons([]);
    setQueryParams({ ...queryParams, name: searchText });
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
                    key={poke.id}
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
