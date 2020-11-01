import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{backgroundColor: "#cc4400"}}>
            <h1 style={{backgroundColor: "#cc4400"}} className="jumbotron" >Pumpkin Spice<a style={{color: "#1f6135"}} href="https://www.linkedin.com/in/jess-white-chicago/">*</a> Quiz App</h1>
        </Jumbotron>
    )
}

