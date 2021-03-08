import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.scss';

class Home extends Component{
    state = {
        name: "" //created to get name from user
    }
    render(){
        return(
            <div className = "home-container">
                
                <p className = "game-info">In the beginning, you have {this.state.score} pots of food for pets.</p>
                <p className = "game-info">You will have as much pet food as your end-game score so you can feed the animals.</p>
            
                <input id="input" onChange={(event) => this.setState({ name:event.target.value})} placeholder="Your name.." />
                <Link to={{ pathname:"/game", name: this.state.name}}>Start the Game</Link>
            </div>
        )
    }
};

export default Home;
