import React, { Component } from "react";
import Item from './../../assets/pati.png';
import './Card.scss';

class Card extends Component {
    render(){
        const { item, onClickHandler } = this.props;
        return(
            <div className="card">
                {<img onClick={onClickHandler} className={item.open ? 'card-open' : 'card-closed'} src={item.open ? item.image : Item} alt={item.name} />}
            </div>
        )
    }
};

export default Card;