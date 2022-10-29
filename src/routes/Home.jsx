import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export const Home = () =>{
    return <div className="col-12 text-center mt-3">
        <Link to='/search'><Button variant='primary' className='btn-start'>Start</Button></Link>
    </div>
}
