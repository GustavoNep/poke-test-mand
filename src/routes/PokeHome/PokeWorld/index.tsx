import { PokemonDTO } from "../../../models/pokemon";
import axios from "axios";
import "./styles.css";
import { useEffect, useState } from "react";
import PokeCard from "../../../components/PokeCard";

export default function PokeWorld() {

  const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    try {
      axios.get("https://dev-api-teste.mandarin.com.br/pokemons")
        .then((response) => {
            console.log(response.data);
            setPokemons(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  },[]);


  return (
    <main>
      <section className="pokemon">
        <div className="pokemon__title">
          <h1>Mandarin Poke World</h1>
        </div>
        <div className="pokemon__wrapper">
          
          <PokeCard />
        </div>
      </section>
    </main>
  );
}
