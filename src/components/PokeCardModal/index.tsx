import backImg from "../../assets/water.png";
import gifImg from "../../assets/kingdra.gif";
import { AiOutlineClose } from 'react-icons/ai';

import "./styles.css";
import { PokemonDTO } from "../../models/pokemon";

type Props = {
  name: string;
  category: string;
  image_url: string;
  background_image_url: string;
};

type pokemonCardModalProps = {
    pokemon: PokemonDTO | null;
    onClose: () => void;
}

export default function PokeCardModal({pokemon, onClose,} : pokemonCardModalProps) {
  return (
    <main className="container-overlay">
      <div className="container-overlay-section">
         <div className="my-icon-class">
          
            <span>
                <AiOutlineClose onClick={onClose}/>
            </span>
        </div>
        <div className="container-overlay-section__image">
          
          <img src={pokemon?.background_image_url} alt="/" className="container-section__img"></img>
          <img src={pokemon?.image_url} alt="/" className="container-section__gif"></img>
        </div>
        <div className="container-overlay-section__desc">
          <div className="desc-title">
            <h1>{pokemon?.name}</h1>
            <p> This {pokemon?.name} type {pokemon?.category} wants to fight !</p>
          </div>

          <div className="buttons">
            <div className="buttons-choices">
              <button className="button-attack">Attack</button>
              <button className="button-run">Run</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
