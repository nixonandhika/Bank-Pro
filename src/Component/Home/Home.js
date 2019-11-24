import React from 'react';
import HomePic from '../../public/homepage-pic.png';
import Logo from '../../public/logo.png';
// import Phone from '../../public/call_icon.png';
// import Search from '../../public/search_icon.png';
import './Home.css';
import {
    Navbar, Nav, NavLink, NavbarBrand
  } from 'reactstrap';



export class Home extends React.Component {
    render (){
        return(
            <div className='home'>
                <Banner/>
                <Navigation/>
            </div>
        )
    }
}

function Banner() {
    return (
        <Navbar style={{'background-color':'white'}}>
        <NavbarBrand href="/" style={{color : '#3E5666', fontSize:30, fontWeight:"bold", fontStyle:'italic'}}><img id='logo-pic' src={Logo} alt='bank-logo' style={{'width':'5rem'}}/>Bank Pro</NavbarBrand>
        <Nav>
            <NavLink href="/login" style={{color : '#3E5666'}}>Login</NavLink>
        </Nav>

    </Navbar>
    )
}

function Navigation() {
    return(
        <div>
            <div className='navbar'>
                <p id='product'>Product</p>
                <p id='services'>Services</p>
                <p id='news'>News</p>
                <p id='ebanking'>E-Banking</p>
                <p id='about'>About Us</p>
                <p id='contact'>Contact</p>
            </div>
            <img id='homepage-pic' src={HomePic} alt='homepage-pic'/>
        </div>
    )
}

export default Home;