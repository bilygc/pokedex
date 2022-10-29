import React from 'react';
import logo from '../pokedex.png';
import { Outlet } from 'react-router-dom';
import "./general.css";

export const Layout = () =>{
    return (
        <div className="container inner-container">
            <div className="row text-center mt-5">
                <div className="col-12">
                    <header>
                        <img src={logo} className="img-fluid" alt="logo" />
                    </header>
                </div>
            </div>
            <div className="row" style={{margin:0}}>
                <Outlet/>
            </div>
        </div>
    );
}