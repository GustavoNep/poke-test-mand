import './styles.css';
import backImg from '../../assets/water.png';
import gifImg from '../../assets/kingdra.gif';

export default function PokeCard() {
    return (
        <main className='container-card'>
            <div className='container-card__img'>
                <img src={backImg} alt='/' className='container-card__img--background'></img>
                <img src={gifImg} alt='/' className='container-card__img--gif'></img>
            </div>
            
            <div className='container-card__desc'>
                Water type pokemon

            </div>
        </main>
    )
}