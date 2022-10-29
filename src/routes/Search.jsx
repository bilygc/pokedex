import React from "react";
import loadingImg from "../loader.gif"
import "./Search.css"
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../features/pokemon/pokemonSlice";
import { useState, useEffect } from "react";

export const Search = () =>{
    const [isDisabled, setIsDisabled] = useState(true);
    const [term, setTerm] = useState("");

    const { loading, responseStatus, pokemonData } = useSelector((state) => state.pokemon)
    
    useEffect(()=>{
        if(responseStatus <= 399 && pokemonData.abilities ){
            navigate("/detail");
        }
    },[responseStatus, pokemonData]);

    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setIsDisabled(e.target.value ? false: true);
        setTerm(e.target.value.toLowerCase() );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(fetchPokemon(term));
    }
    

    return <div className="col-12 text-center mt-5">        
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input value={term} type="text" placeholder=" Pokemon name" onChange={handleChange} /><i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <br />
                <Button type="submit" className="btn-start" variant="primary" disabled={isDisabled}>Search</Button>
                <br />
                { loading && <img className="loadingImg" src={loadingImg} alt="loading data" /> }
                {responseStatus >= 400 && <p className="search-error">POKEMON NOT FOUND :(</p>}
            </form>
    </div>
}