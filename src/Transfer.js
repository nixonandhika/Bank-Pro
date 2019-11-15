import React from 'react';
import Navigation from './Navigation';
import './Transfer.css';


export class Transfer extends React.Component {
    render (){
        return(
            <div className='transfer'>
                <Navigation/>
                <div className='transfer-body'>
                    <div id='transfer-text'>Transfer</div>
                    <form id='form'>
                        <input id='target-number' className='target' type='text' placeholder='Enter the destination account or virtual account number'></input>
                        <input id='target-amount' className='target' type='text' placeholder='Enter amount you want to transfer'></input>
                        <button id='send-button' type='submit' name='target-account'>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Transfer;