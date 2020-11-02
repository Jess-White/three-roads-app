import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function About() {
    return (
        <Jumbotron style={{backgroundColor: "#cc4400", padding: "2%",
        margin: "0%"}}>
            <h1 style={{backgroundColor: "#cc4400", padding: "0%",
            margin: "0%"}} className="jumbotron">Hi there!</h1>
            <h2 style={{textAlign: "center"}}>Welcome to the Pumpkin Spice Pop Quiz!*</h2>
            <h5>This trivia quiz app was created in response to a technical challenge. Challenge specs included twenty-one trivia questions in an array-of-hashes format. The challenge was language-agnostic and open-ended, so I decided to build a React app with components for the quiz elements and hooks to manage scoring. It was Halloween when I finished the project, hence the pumpkin spice theme. You can see the repo <a style={{color: "#1f6135"}} href="https://github.com/Jess-White/three-roads-app">here.</a> Enjoy!</h5>
            <h5>*not actually pumpkin spicy</h5>
            
        </Jumbotron>
    )
}