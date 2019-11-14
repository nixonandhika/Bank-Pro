import React from 'react';
import Logo from './public/logo-white.png';
import Navigation from './Navigation';
import './Account.css';
import {Link} from 'react-router-dom';

export class Account extends React.Component {
    render (){
        return(
            <div class='account'>
                <Navigation/>
                <div class='account-body'>
                    <div class='welcome'>Welcome to Bank Pro!</div>
                    <div class='welcome'>Convenience at its Best</div>
                    <div class='account-info'>
                        <label id='data-text'>Here is your latest data</label>
                        <div id='account-name' class='info-text'>
                            <label>Name</label>
                            <label>:</label>
                            <label id='the-account-name'></label>
                        </div>
                        <div id='account-number' class='info-text'>
                            <label>Account Number</label>
                            <label>:</label>
                            <label id='the-account-number'></label>
                        </div>
                        <div id='account-balance' class='info-text'>
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