import './styles.css'

export default function SearchPoke() {
    return (
        <form className='poke-search-bar'>
            <button type='submit'>🔎︎</button>
            <input value="" type='text' placeholder='Pokemon name'></input>
            <button type='reset'>🗙</button>
        </form>
    )
}