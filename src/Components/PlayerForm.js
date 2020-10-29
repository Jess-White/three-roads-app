import React from 'react';
import { addNewPlayer } from '../Services/PlayersandScoresAPI';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class PlayerForm extends React.Component {
    state = {
      username: "",
      email: ""
    }
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault() 
      addNewPlayer({
        username: this.state.username, email: this.state.email
        })
      .then(() => {
        this.props.handleAddNewPlayer({
        username: this.state.username, email: this.state.email
        })
      })
      .catch(() => {
        this.setState({
          username: "",
          email: ""
        })
      })
      .then(() => {
        console.log(this.state.hasError)
      })}

  render() {
    return (
        <Card style={{backgroundColor: "#000058"}}>
          <div className="card-header">
          Add New Player!
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <h4>Enter Your Username:</h4>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.username}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <h4>Enter Your Email:</h4>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <Button 
                  className="btn-lg"  
                  type="submit"
                >
                  Add New Player
                </Button>
              </div>
            </form>
          </div>
        </Card>
      );
    }
  }