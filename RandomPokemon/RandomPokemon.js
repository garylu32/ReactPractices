import "./RandomPokemon.css";
export default function RandomPokemon() {
    const randomNumber = Math.floor(Math.random() * 151) + 1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;
    return (
        <div className="RandomPokemon">
            <h2>Pokemon # {randomNumber} </h2>
            <img src={url} alt="" />
        </div>
    );
}