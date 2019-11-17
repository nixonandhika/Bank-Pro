import React from 'react';
import HomePic from './public/homepage-pic.png';
import Logo from './public/logo.png';
import Phone from './public/call_icon.png';
import Search from './public/search_icon.png';
import './Home.css';
import {Link} from 'react-router-dom';




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
    <div className='banner'>
        <div className='logo'>
            <Link to='/login'>
            <div className='logo-img'>
                <img id='logo-pic' src={Logo} alt='bank-logo'/>
            </div>
            </Link>
            <Link style={{'textDecoration': 'none'}}to='/login'>
            <div className='logo-text'>
                <label id='com-name'>Bank Pro</label>
                <label id='com-motto'>Your #1 Partner</label>
            </div>
            </Link>
        </div>
        <div className='info'>
            <div id='phone-wrapper'>
                <img id='phone-icon' src={Phone} alt='phone-icon'/>    
                {/* <img id='phone-icon' src={Phone} alt='phone-icon'/>                     */}
            </div>
            <p id='phone-num'>(555) - 1234 5678</p>
            <div id='search-wrapper'>
                <img id='search-icon' src={Search} alt='search-icon'/>
            </div>
            <div id='login-box'>
                <Link style={{color:'#2A4456','text-decoration': 'none'}} to='/login'>Login</Link>
            </div>
            <div id='register-box'>
                <p id='register-text'>Join Us</p>
            </div>
        </div>
    </div>
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