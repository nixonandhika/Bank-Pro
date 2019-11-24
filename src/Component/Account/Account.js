import React from 'react';
// import Logo from './public/logo-white.png';
import './Account.css';
import axios from 'axios';

export class Account extends React.Component {
    constructor(props){
        super(props);
        let account = localStorage.getItem('account_number');
        this.state = {
            name : '',
            number: account,
            balance: '',
            loading: true
        }

    }

    componentDidMount(){
        let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.account.com/">
        <soapenv:Header/>
        <soapenv:Body>
        <ser:getAccountByNum>
        <!--Optional:-->
        <arg0>${this.state.number}</arg0>
        </ser:getAccountByNum>
        </soapenv:Body>
        </soapenv:Envelope>`;
        axios.post('http://localhost:8080/ws-bank-1.0-SNAPSHOT/services/AccountService',body,{
            headers: {'Content-Type': 'text/xml','Access-Control-Allow-Origin': '*'}
        })
        .then((response)=>{
            let xml = new DOMParser();
            xml = xml.parseFromString(response.data,'text/xml');
            console.log(response.data);
            this.setState({
                name: xml.getElementsByTagName("return")[0].getElementsByTagName('name')[0].innerHTML,
                balance: xml.getElementsByTagName("return")[0].getElementsByTagName('balance')[0].innerHTML,
                loading: false
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render (){
        return(
            <div className='account'>
                <div className='account-body'>
                    <div className='welcome'>Welcome to Bank Pro!</div>
                    <div className='welcome'>Convenience at its Best</div>
                    <div className='account-info'>
                        <label id='data-text'>Here is your latest data</label>
                        <div id='account-name' className='info-text'>
                            <label>Name</label>
                            <label>:</label>
                            <label id='the-account-name'>{this.state.loading ? '' : this.state.name}</label>
                        </div>
                        <div id='account-number' className='info-text'>
                            <label>Account Number</label>
                            <label>:</label>
                            <label id='the-account-number'>{this.state.loading ? '' : this.state.number}</label>
                        </div>
                        <div id='account-balance' className='info-text'>
                            <label>Account Balance</label>
                            <label>:</label>
                            <label id='the-account-balance'>{this.state.loading ? '' : this.state.balance}</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;