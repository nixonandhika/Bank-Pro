import React from 'react';
// import Logo from './public/logo-white.png';
import Navigation from './Navigation';
import './Account.css';
// import {Link} from 'react-router-dom';

export class Account extends React.Component {
    render (){
        return(
            <div className='account'>
                <Navigation/>
                <div className='account-body'>
                    <div className='welcome'>Welcome to Bank Pro!</div>
                    <div className='welcome'>Convenience at its Best</div>
                    <div className='account-info'>
                        <label id='data-text'>Here is your latest data</label>
                        <div id='account-name' className='info-text'>
                            <label>Name</label>
                            <label>:</label>
                            <label id='the-account-name'></label>
                        </div>
                        <div id='account-number' className='info-text'>
                            <label>Account Number</label>
                            <label>:</label>
                            <label id='the-account-number'></label>
                        </div>
                        <div id='account-balance' className='info-text'>
                            <label>Account Balance</label>
                            <label>:</label>
                            <label id='the-account-balance'></label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;