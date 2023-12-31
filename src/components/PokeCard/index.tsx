import './styles.css';

type Props = {
    name: string,
    category: string,
    image_url: string,
    background_image_url: string,
    onClick?: () => void;
}

export default function PokeCard({name, category, image_url, background_image_url, onClick} : Props) {

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };
    
    return (
        <div onClick={onClick ? handleClick : undefined} className='container-card' >   
            <div className='container-card__img'>
                <img src={background_image_url} alt='/' className='container-card__img--background'></img>
                <img src={image_url} alt='/' className='container-card__img--gif'></img>
            </div>
            
            <div className='container-card__desc'>
                <div className='container-card__desc--title'>
                    <h1>{name}</h1>
                </div>
                <div className='container-card__desc--subtitle'>
                    <p> <span>{category}</span>type pokemon</p>
                </div> 
            </div>
        </div>
    )
}