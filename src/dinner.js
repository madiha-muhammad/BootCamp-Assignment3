import React from 'react';

function Dinner(props) {
    return (
        <div>
            <div>
                <h5>-- DINNER MENU --</h5>
                <ul>
                    <li className='choice'>-- Gravi --</li>
                    <li>Chicken Biryani</li>
                    <li>Chicken Krahi</li>
                    <li>Achar Gosht</li>
                    <li className='choice'>-- Kababs --</li>
                    <li>Seekh Kabab</li>
                    <li>Reshmi Kabab</li>
                </ul>
            </div>
            <br></br>
            <div>
                <h5>Customer's Order</h5>
                <ul>
                    <li>{props.selectedDish}</li>
                    <li>{props.selectedKabab}</li>
                </ul>
            </div>
        </div>
    )
}

export default Dinner;