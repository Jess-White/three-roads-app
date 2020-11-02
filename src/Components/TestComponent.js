import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

export default function TestComponent() {
    return (
        <div>
        <Jumbotron style={{backgroundColor: "#cc4400"}}>
            <h1>Hello World</h1>
            <h2>Hello World</h2>
            <h3>Hello World</h3>
        </Jumbotron>
        <Card>
          <Card.Title>Test Card Title</Card.Title>
          <Card.Body>Test Card Body</Card.Body>
        </Card>
        </div>
    )
}