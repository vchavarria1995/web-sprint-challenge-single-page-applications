import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

export default function PizzaHome() {
    const { url } = useRouteMatch()
    return (
        <div className="mainContainer">
            <h1>Lambda Eats</h1>
            <h2>Order Now!</h2>
            <Link to={`${url}pizza`}><button id="order-pizza">Order Now</button></Link>
        </div>
    );
};