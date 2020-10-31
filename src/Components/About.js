import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function About() {
    return (
        <Jumbotron style={{backgroundColor: "#000080", padding: "2%",
        margin: "0%"}}>
            <h1 style={{backgroundColor: "#000060", padding: "0%",
            margin: "0%"}} className="jumbotron">Hi there!</h1>
            <h3>Pumpkin Spice Pop Quiz*</h3>
            <h5>This trivia app was created as a </h5>
            *Nothing about the content of this quiz is pumpkin-spice related; nothing pumpkin spice is realized in any thematic element in this project. I just needed a hook (get it? hook? Because this is a React project? And React uses - No? Moving on:) and it's autumn and I feel like we could all use something cozy right now. Burnt orange is pretty, isn't it? 
        </Jumbotron>
    )
}