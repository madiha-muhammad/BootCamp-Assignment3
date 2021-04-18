import React from 'react';

function Breakfast(props) {
    return (
        <div>
            <div>
                <h5>-- NASHTA MENU --</h5>
                <ul>
                    <li className='choice'>-- Special Nashta --</li>
                    <li>Nehari</li>
                    <li>Halwa Poori</li>
                    <li className='choice'>-- Chana Gravi --</li>
                    <li>Murgh Chanay</li>
                    <li>Anda Chanay</li>
                    <li>Kofta Chanay</li>
                    <li className='choice'>-- Prathy --</li>
                    <li>Aaloo Pratha</li>
                    <li>Qeema Pratha</li>
                    <li>Omlate Pratha</li>
                    <li className='choice'>-- Drinks --</li>
                    <li>Sada Lassi</li>
                    <li>Pyray vali Lassi</li>
                    <li>Karak Cahi</li>
                </ul>
            </div>
            <br></br>
            <div>
                <h5>Customer's Order</h5>
                <ul>
                    <li>{props.selectedSpecial}</li>
                    <li>{props.selectedChanay} Chanay</li>
                    <li>{props.selectedPratha} Pratha</li>
                    <li>{props.selectedDrink}</li>
                </ul>
            </div>
        </div>
    )
}

export default Breakfast;