import "./PokemonDetail.css";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPokemonData, reset } from './pokemonSlice';
import { Button } from "react-bootstrap";
import { getRandomIntInclusive } from "../../utilities/random";
import { useNavigate } from 'react-router-dom';


export function PokemonDetail() {
  const pokemonData = useSelector(selectPokemonData);
  
  const navigate =  useNavigate();
  const dispatch = useDispatch();

  const resetBtn = () =>{
    dispatch(reset());
    navigate("/");
  }
  

  return (
    <>
    <div className="row pkmn-gral mb-3">
      <div className="col-6">
        <strong><p>{pokemonData.name}</p></strong>
      </div>
      <div className="col-6 pkmn-exp">
        <span>EXP </span><p><strong>{pokemonData.base_experience}</strong></p>
      </div>
      <div className="col-12 text-center">
        <img  className='img-front' src={pokemonData.sprites.front_default} alt={`pokemon ${pokemonData.name}`} />
      </div>
      <div className="col-6">
        <i className="fa-solid fa-ruler-vertical"></i><i className="fa-solid fa-arrows-up-down"></i><p>   {pokemonData.height}</p>
      </div>
      <div className="col-6 pkmn-weight">
        <p>{pokemonData.weight}   </p><i className="fa-solid fa-weight-hanging"></i>
      </div>
    </div>
    <div className="row table-header">
      <div className="col-6 py-1"><strong>MOVES</strong></div>
      <div className="col-6 py-1">{pokemonData.moves.length}</div>
    </div>
    <div className="row table-content text-center">
      <div className="col-12 py-1">{pokemonData.moves[getRandomIntInclusive(0, pokemonData.moves.length - 1)].move.name}</div>
      <div className="col-12 py-1">{pokemonData.moves[getRandomIntInclusive(0, pokemonData.moves.length - 1)].move.name}</div>
      <div className="col-12 py-1">{pokemonData.moves[getRandomIntInclusive(0, pokemonData.moves.length - 1)].move.name}</div>
    </div>
    <div className="row text-center mt-4">
      <div className="col-12 text-center">
        <Button className='btn-start' onClick={() =>resetBtn()}>Reset</Button>
      </div>
    </div>
    </>
  );
}
