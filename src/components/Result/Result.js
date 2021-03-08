import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import feed from './../../assets/feed.jpg';

import './Result.scss';

class Result extends Component{
    render(){
        const {userName, score} = this.props.location;
        return( 
            <div className="return-container">
                <p>Hey{userName}, here is your score: {score}!</p>
                <p>Thanks for feeding pets :) </p>
                <img id="feed" src={feed}></img>
            </div>
        )
    }
}

export default withRouter(Result);