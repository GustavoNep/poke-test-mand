import backImg from "../../assets/water.png";
import gifImg from "../../assets/kingdra.gif";
import { AiOutlineClose } from 'react-icons/ai';

import "./styles.css";

type Props = {
  name: string;
  category: string;
  image_url: string;
  background_image_url: string;
};

export default function PokeCardModal() {
  return (
    <main className="container-overlay">
      <div className="container-overlay-section">
         <div className="my-icon-class">
          
            <span>
                <AiOutlineClose />
            </span>
        </div>
        <div className="container-overlay-section__image">
          
          <img src={backImg} alt="/" className="container-section__img"></img>
          <img src={gifImg} alt="/" className="container-section__gif"></img>
        </div>
        <div className="container-overlay-section__desc">
          <div className="desc-title">
            <h1>Kingdra</h1>
            <p> This kingrda type water wants to fight !</p>
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
