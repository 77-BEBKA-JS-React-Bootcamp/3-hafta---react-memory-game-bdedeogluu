import React, { Component } from "react";
import { shuffle, times } from 'lodash';
import Card from '../Card/Card';

import './CardGame.scss';

import cat from './../../assets/cat_1.jpg';
import cat2 from './../../assets/cat.jpg';
import dog from './../../assets/dog_1.jpg';
import dog2 from './../../assets/dog.jpg';

import { withRouter, Redirect } from 'react-router-dom';


class CardGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards:[

                { name: "cat", open: false, id: 1, image: cat, isCompleted: false},
                { name: "cat2", open: false, id: 2, image: cat2, isCompleted: false},
                { name: "dog", open: false, id: 3, image: dog, isCompleted: false},
                { name: "dog2", open: false, id: 4, image: dog2, isCompleted: false},
                { name: "cat", open: false, id: 5, image: cat, isCompleted: false},
                { name: "cat2", open: false, id: 6, image: cat2, isCompleted: false},
                { name: "dog", open: false, id: 7, image: dog, isCompleted: false},
                { name: "dog2", open: false, id: 8, image: dog2, isCompleted: false},

            ],
            shuffledCards: [],  //creating required arrays
            matchedCards: [],
            flippedCards: [],
            score:8     //initial score to update
        }
    }

    componentDidMount(){
        //used lodash shuffle method to shuffle cards easily
        this.setState({ shuffledCards : shuffle(this.state.cards)})
    }

    onClickHandler = (item, index) => {

        if( this.state.flippedCards.length === 2 ) {
            setTimeout( () => {
                this.check();
            }, 750);
        } else {
            let flippedCards = this.state.flippedCards;
            let shuffledCards = this.state.shuffledCards;
            shuffledCards[index].open = true;
            flippedCards.push(item);
            this.setState({
                flippedCards,
                shuffledCards
            })
            if(this.state.flippedCards.length === 2 ) {
                setTimeout( () => {
                    this.check();
                }, 750);
            }
        }
    }

    check(){
        let shuffledCards = this.state.shuffledCards;
        let matchedCards = this.state.matchedCards;

        if(this.state.flippedCards[0].name === this.state.flippedCards[1].name){    
            //if cards get matched we need to push them array and say they are both completed to do not check again
            shuffledCards.find( item => item.id === this.state.flippedCards[0].id).isCompleted = true;
            shuffledCards.find( item => item.id === this.state.flippedCards[1].id).isCompleted = true;
            matchedCards.push(this.state.flippedCards[0].id, this.state.flippedCards[1].id)
        } else {  //if cards not matched we need to close cards
            shuffledCards.find( item => item.id === this.state.flippedCards[0].id).open = false;
            shuffledCards.find( item => item.id === this.state.flippedCards[1].id).open = false;
            this.setState({ score: this.state.score -1 });  //update score if choice is wrong 
        }

        this.setState({
            flippedCards: [],   //we need to clean array to check others
            matchedCards
        })
    }
    render(){
        //checking score and cards to show result 
        if(this.state.matchedCards.length === 8 ){
            const newTo = {
                pathname: "",
                userName: this.props.location.userName,
                score: this.state.score
            };
            this.state.matchedCards.length === 8 ? newTo.pathname = "/result" : newTo.pathname ="/result"
            return < Redirect to ={ newTo } />
        }
        return(
            <>
                <p className = "game-info">Welcome to game. Hi { this.props.location.name }! </p>
                
                
                <div className = "card-container">
                    {this.state.shuffledCards.map((item, index) =>
                        <Card
                            key={index}
                            onClickHandler={() => this.state.flippedCards.length === 2 ? 
                                null : 
                                this.onClickHandler(item, index)}
                            item={item} />
                    )}
                </div>
            </>
        )
    }
};

export default withRouter(CardGame);
