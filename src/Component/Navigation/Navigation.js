import React from 'react';
import Logo from '../../public/logo-white.png';
import './Navigation.css';

export class Navigation extends React.Component {
    render() {
        return (
            <div className='account-navigation'>
                <div className='logo'>
                    <a href='/login'>
                    <div className='logo-img'>
                        <img id='logo-pic' src={Logo} alt='bank-logo'/>
                    </div>
                    </a>
                    <a style={{'textDecoration': 'none'}}href='/login'>
                    <div className='logo-text'>
                        <label id='account-com-name'>Bank Pro</label>
                        <label id='account-com-motto'>Your #1 Partner</label>
                    </div>
                    </a>
                </div>
                <div className='link'>
                    <a style={{'textDecoration': 'none'}} href='/account'>
                        <div className='box'>
                            <a style={{color:'white','textDecoration': 'none'}} href='/account'>Account</a>
                        </div>
                    </a>
                    <a style={{'textDecoration': 'none'}} href='/transfer'>
                        <div className='box'>
                            <a style={{color:'white','textDecoration': 'none'}} href='/transfer'>Transfer</a>
                        </div>
                    </a>
                    <a style={{'textDecoration': 'none'}} href='/history'>
                        <div className='box'>
                            <a style={{color:'white','textDecoration': 'none'}} href='/history'>History</a>
                        </div>
                    </a>
                    <a style={{'textDecoration': 'none'}} href='/'>
                        <div className='box'>
                            <a style={{color:'white','textDecoration': 'none'}} href='/'>Logout</a>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navigation;