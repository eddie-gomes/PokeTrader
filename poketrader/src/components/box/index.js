import React, { useEffect, useState } from 'react';
import "./styles.css";


export default function Box({baseExp, list, setList, setNameList}) {
    const [pokemons, setPokemons] = useState(null);
    const [exp, setExp] = useState(0);
    const [names, setNames] = useState([]);

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then((r) => r.json())
        .then((json) => {
            setPokemons(json.results);
        });
    }, []);
    
    if (!pokemons) {
      return null;
    }

    const HandleSelect = (event) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
        .then((r)=> r.json())
        .then((json) => {
            const poke={
                    name: json.name, 
                    base_experience: json.base_experience,
                    sprite: json.sprites.front_default
                    }
            setList((prevState)=> [...prevState, poke]);
            setExp(exp+poke.base_experience);
            baseExp(exp+poke.base_experience);
            setNameList((prevState)=> [...prevState, poke.name]);
            setNames((prevState)=> [...prevState, poke.name]);
        })
        this.setState({value:""})
    }

    const RemovePoke = (index) => {
        const aux = list.filter((p, idx)=> index!==idx);
        setList(aux);
        const aux1 = list[index].base_experience;
        setExp(exp-aux1);
        baseExp(exp-aux1);
        const aux2 = names.filter((p, idx)=> index!==idx);
        setNameList(aux2);
        setNames(aux2);
    }





    return (
        <div className="box">
            <p className='paragraph'>
                Informe os Pokémon que deseja trocar: <br/>
            </p>
            <div className='paragraph'>
                <select onChange={HandleSelect}   disabled={list.length===6}>
                <option value="">Selecione um Pokémon</option>
                    {pokemons.map(({ name }) => (
                        <option key={name} >
                            {name}
                        </option>
                    ))}
                </select >
                <div className='exp-base'>
                    Experiência base total: {exp}
                </div>
                </div>
            <div className='sprites'>
                {list.map((pokemon, index) => (
                    <div className='poke-sprite' key={index}>
                        <img src={pokemon.sprite} alt='poke_sprite' />
                        <div className='p-name' >
                            <p>{pokemon.name}</p>
                            <button onClick={()=>{RemovePoke(index)}} className='p-button'>x</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );

}