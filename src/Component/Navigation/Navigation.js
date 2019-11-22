import React from 'react';
import Logo from '../../public/logo-white.png';
import './Navigation.css';
import {
    Navbar, Nav, NavLink, NavbarBrand
  } from 'reactstrap';
  
export class Navigation extends React.Component {
    constructor(props){
        super(props);
        let account = localStorage.getItem('account_number');
        if(account === null){
            window.alert('Login First');
            window.location.replace("/login");
          }  
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        localStorage.removeItem('account_number');
        alert('You logout');
        window.location.replace('/');
    }
    render() {
        return (
            // <div className='account-navigation'>
            //     <div className='logo'>
            //         <a href='/login'>
            //         <div className='logo-img'>
            //             <img id='logo-pic' src={Logo} alt='bank-logo'/>
            //         </div>
            //         </a>
            //         <a style={{'textDecoration': 'none'}}href='/login'>
            //         <div className='logo-text'>
            //             <label id='account-com-name'>Bank Pro</label>
            //             <label id='account-com-motto'>Your #1 Partner</label>
            //         </div>
            //         </a>
            //     </div>
            //     <div className='link'>
            //         <a style={{'textDecoration': 'none'}} href='/account'>
            //             <div className='box'>
            //                 <a style={{color:'white','textDecoration': 'none'}} href='/account'>Account</a>
            //             </div>
            //         </a>
            //         <a style={{'textDecoration': 'none'}} href='/transfer'>
            //             <div className='box'>
            //                 <a style={{color:'white','textDecoration': 'none'}} href='/transfer'>Transfer</a>
            //             </div>
            //         </a>
            //         <a style={{'textDecoration': 'none'}} href='/history'>
            //             <div className='box'>
            //                 <a style={{color:'white','textDecoration': 'none'}} href='/history'>History</a>
            //             </div>
            //         </a>
            //         <a style={{'textDecoration': 'none'}} href='/'>
            //             <div className='box'>
            //                 <a style={{color:'white','textDecoration': 'none'}} onClick={this.handleLogout} href='/'>Logout</a>
            //             </div>
            //         </a>
            //     </div>
            // </div>
            <Navbar>
                <NavbarBrand href="/" style={{color : '#FFFFFF', fontSize:30, fontWeight:"bold", fontStyle:'italic'}}><img id='logo-pic' src={Logo} alt='bank-logo' style={{'width':'5rem'}}/>Bank Pro</NavbarBrand>
                <Nav>
                    <NavLink href="/account" style={{color : 'white'}}>Account</NavLink>
                    <NavLink href="/transfer" style={{color : 'white'}}>Transfer</NavLink>
                    <NavLink href="/history" style={{color : 'white'}}>History</NavLink>
                    <NavLink href="/" onClick={this.handleLogout} style={{color : 'white'}}>Logout</NavLink>
                </Nav>

            </Navbar>
        )
    }
}

export default Navigation;