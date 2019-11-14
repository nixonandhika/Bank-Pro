import React from 'react';
import Logo from './public/logo-white.png';
import './Navigation.css';
import {Link} from 'react-router-dom';

export class Navigation extends React.Component {
    render() {
        return (
            <div class='account-navigation'>
                <div class='logo'>
                    <Link to='/login'>
                    <div class='logo-img'>
                        <img id='logo-pic' src={Logo} alt='bank-logo'/>
                    </div>
                    </Link>
                    <Link style={{'textDecoration': 'none'}}to='/login'>
                    <div class='logo-text'>
                        <label id='account-com-name'>Bank Pro</label>
                        <label id='account-com-motto'>Your #1 Partner</label>
                    </div>
                    </Link>
                </div>
                <div class='link'>
                    <Link style={{'text-decoration': 'none'}} to='/account'>
                        <div class='box'>
                            <Link style={{color:'white','text-decoration': 'none'}} to='/account'>Account</Link>
                        </div>
                    </Link>
                    <Link style={{'text-decoration': 'none'}} to='/transfer'>
                        <div class='box'>
                            <Link style={{color:'white','text-decoration': 'none'}} to='/transfer'>Transfer</Link>
                        </div>
                    </Link>
                    <Link style={{'text-decoration': 'none'}} to='/history'>
                        <div class='box'>
                            <Link style={{color:'white','text-decoration': 'none'}} to='/history'>History</Link>
                        </div>
                    </Link>
                    <Link style={{'text-decoration': 'none'}} to='/'>
                        <div class='box'>
                            <Link style={{color:'white','text-decoration': 'none'}} to='/'>Logout</Link>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navigation;