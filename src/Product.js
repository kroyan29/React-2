import React, { Component } from 'react';
import './App.css';
// 3 практика
function Product(props) {
    console.log(props); // объект с ключами name и cost

    return <p>
        name: <span>{props.name}</span>,
        cost: <span>{props.cost}</span>

    </p>;
}



export default Product;
