import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import axios from 'axios'

class Main extends Component {

    constructor(props) {
      super(props);
      this.cardName = "Arclight Phoenix";
      this.state = {price: 0}

      this.ping = this.ping.bind(this);
    }

    render() {
      return (
        <div className="Main">
          <header className="App-header">
            <h1 className="App-title">Ping</h1>
          </header>
          <p className="App-intro">
            <div>
              <button onClick={this.ping}>Ping!</button>
              <div>{this.cardName} : {this.state.price}</div>
            </div>
          </p>
        </div>
      );
    }

    ping() {
      axios.get("http://localhost:8080/Arclight+Phoenix/price").then(res => {
        this.setState({price : res.data.usd});
      }, err => {
        alert("Server rejected response with: " + err);
      });
    }
}

export default Main;
