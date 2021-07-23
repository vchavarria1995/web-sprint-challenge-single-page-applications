import { Link } from 'react-router-dom'
import React from 'react';

export default function PizzaHeader() {
    return (
        <div className="header">
            <div className="navBar">
                <h1>Welcome to Lambda Eats!</h1>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );
};