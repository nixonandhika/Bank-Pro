import React from 'react';
import Logo from '../../public/logo.png';
import './Login.css';

export class Login extends React.Component {
  render (){
      return(
        <div className='login'>
          <center>
            <div className='logo-bank'>
              <div className='logo-img'>
                <img id='logo-pic' src={Logo} alt="Logo bankpro"/>
              </div>
              <div id='bankpro-text'>Bank Pro</div>
            </div>
            <form id='form'>
                <input id='target-accountnumber' className='target' type='text' placeholder='Enter your account number' />
                <form action='/account' method='GET'>
                  <button id='login-button' type='submit' name='target-account'>Login</button>
                </form>
            </form>
          </center>
        </div>
      )
  }
}

export default Login;