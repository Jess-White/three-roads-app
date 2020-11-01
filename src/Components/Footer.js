import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{backgroundColor: "#cc4400"}}>
            <h3>*Nothing about the content of this quiz is pumpkin spice related. I just needed a hook (Get it? Hook? Because this is a React project? And React uses hooks?) and it's autumn and I feel like we could all use something cozy right now. Burnt orange is pretty, isn't it? These are my favorite orange trivia facts:

              1) According to <a style={{color: "#1f6135"}} href="https://gizmodo.com/hot-chocolate-tastes-much-better-in-an-orange-cup-5972777">this Gizmodo article</a>, hot chocolate tastes better when you serve it in an orange mug.
              2) The Golden Gate Bridge is painted in a color called <a style={{color: "#1f6135"}} href="https://www.goldengate.org/bridge/history-research/bridge-features/color-art-deco-styling/">International Orange</a>.  
              3) <a style={{color: "#1f6135"}} href="https://colourlex.com/project/chrome-orange/">Chrome orange,</a> the first synthetic orange pigment, was invented in 1809. 
              4) Chrome orange is derived from a mineral called crocoite, which was also used to create a vibrant green pigment called <a style={{color: "#1f6135"}} href="https://colourlex.com/project/viridian/">Viridian</a>.
            </h3>
        </Jumbotron>
    )
}

