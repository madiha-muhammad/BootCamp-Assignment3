import React from 'react';

function Lunch(props) {
    return (
        <div>
            <div>
                <h5>-- HEALTHY LUNCH MENU --</h5>
                <ul>
                    <li className='choice'>-- Salad Variety --</li>
                    <li>Hummus &amp; Greek Salad</li>
                    <li>Creamy Pesto Chicken Salad with Greens</li>
                    <li>Spring Roll Salad</li>
                    <li>Black Bean &amp; Mango Salad</li>
                    <li>Green Goddess with Chicken Salad</li>
                    <li>Chopped Cobb with Chicken Salad</li>
                    <li>Shrimp Cobb Salad</li>
                    <li>Tex-Mex Pasta Salad</li>
                </ul>
            </div>
            <br></br>
            <div>
                <h5>Customer's Order</h5>
                <ul>
                    <li>{props.selectedSalad} Salad</li>
                </ul>
            </div>
        </div>
    )
}

export default Lunch;