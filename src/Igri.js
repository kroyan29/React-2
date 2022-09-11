import React, { Component } from 'react';
import './App.css';
// 3 практика
function Igri(props) {
    console.log(props); // объект с ключами name и cost

    return <div><h1>{props.name}</h1><br></br>
        <span><img src={props.foto}></img></span><br></br>
     
        Цена игры: <span>{props.cena}</span><br></br>

    </div>;
}



export default Igri;
