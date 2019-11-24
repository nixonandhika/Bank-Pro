import React from 'react';
import Logo from '../../public/logo.png';
import './Login.css';
import axios from 'axios';

export class Login extends React.Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
    // if(localStorage.getItem('account_number') !== null){
    //   window.location.replace('/account');
    // }
  }
  handleLogin(){
    let xml;
    let account_number = document.getElementById("target-accountnumber").value;
    // console.log(account_number);
    
    let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.account.com/">
    <soapenv:Header/>
    <soapenv:Body>
    <ser:getAccountByNum>
    <!--Optional:-->
    <arg0>${account_number}</arg0>
    </ser:getAccountByNum>
    </soapenv:Body>
    </soapenv:Envelope>`;
    console.log(body)
    // let xml = new DOMParser();
    // xml = xml.parseFromString(body,'text/xml');
    axios.post('http://localhost:8080/ws-bank-1.0-SNAPSHOT/services/AccountService',body,{
        headers: {'Content-Type': 'text/xml','Access-Control-Allow-Origin': '*'}
    })
    .then((response)=>{
      xml = new DOMParser();
      xml = xml.parseFromString(response.data,'text/xml');
      let account = xml.getElementsByTagName("return")[0].getElementsByTagName('account')[0].innerHTML;
      if(account === ''){
        alert('invalid account number');
      } else{
        localStorage.setItem('account_number', account);
        window.location.replace("/account");
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
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
              <input id='target-accountnumber' className='target' type='text' placeholder='Enter your account number' />
              <button id='login-button' name='target-account' onClick={this.handleLogin}>Login</button>
          </center>
        </div>
      )
  }
}

export default Login;