import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import axios from 'axios'

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
        cardName: null,
        price: null
      }

      this.getCardPrice = this.getCardPrice.bind(this);
    }

    render() {
      return (
        <div className="Main">
              <div className="search">
                <input type="text" id="search" name="form" placeholder="Search..."/>
                <input type="button" value="Search" id="mySearch" onClick={() => this.getCardPrice(
                        document.getElementById("search").value
                )}/>
              </div>
              <div>
                {this.state.cardName} : {this.state.price}
              </div>
        </div>
      );
    }

    getCardPrice(someName) {
      var cardName = someName;
      axios.get("http://0.0.0.0:8080/"+cardName+"/price").then(res => {
              this.setState({price : "$"+res.data.usd});
              this.setState({cardName : cardName});
            }, err => {
              alert("Server rejected response with: " + err);
            });
    }

}

export default Main;