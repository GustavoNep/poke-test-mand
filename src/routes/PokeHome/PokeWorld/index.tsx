import "./styles.css";
import { PokemonDTO } from "../../../models/pokemon";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import axios from "axios";
import PokeCard from "../../../components/PokeCard";
import SearchPoke from "../../../components/SearchPoke";
import PokeCardModal from "../../../components/PokeCardModal";

type QueryParams = {
  name: string;
};

export default function PokeWorld() {
  const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDTO | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [queryParams, setQueryParams] = useState<QueryParams>({ name: "" });

  type Props = {
    poke: PokemonDTO;
  }
  const openModal = ({ poke } : Props) => {
    setSelectedPokemon(poke);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    try {
      const config: AxiosRequestConfig = {
        method: "GET",
        baseURL: "https://dev-api-teste.mandarin.com.br",
        url: "/pokemons",
        params: {
          name: queryParams.name,
        },
      };

      axios(config).then((response) => {
        setPokemons(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [queryParams.name]);

  function handleSearch(searchText: string) {
    setQueryParams({ name: searchText });
  }

  return (
    <main>
      <section className="pokemon">
        <div className="pokemon__title">
          <h1>Mandarin Pokemon World</h1>
          <p>Search for pokemons here</p>
        </div>
        <div className="search-pokemon">
          <SearchPoke onSearch={handleSearch} />
        </div>
        <div className="pokemon__wrapper">
          {pokemons.map((poke) => (
            <PokeCard
              onClick={() => openModal({ poke })}
              key={poke.id}
              name={poke.name}
              category={poke.category}
              image_url={poke.image_url}
              background_image_url={poke.background_image_url}
            />
          ))}
        </div>
        {isModalOpen && (
          <div className="modal-wrapper">
            <PokeCardModal pokemon={selectedPokemon} onClose={closeModal}/>
          </div>
        )}
      </section>
    </main>
  );
}
