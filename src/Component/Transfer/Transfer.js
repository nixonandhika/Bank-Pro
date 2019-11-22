import React from 'react';
import './Transfer.css';
import axios from 'axios';

export class Transfer extends React.Component {
    constructor(props){
        super(props);
        let account = localStorage.getItem('account_number');
        this.state ={
            account: account
        }
        this.handleTransfer = this.handleTransfer.bind(this);
    }

    handleTransfer(){
        let target_number = document.getElementById("target-number").value;
        let target_amount = document.getElementById("target-amount").value;
        let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.transaction.com/">
        <soapenv:Header/>
        <soapenv:Body>
        <ser:transfer>
        <!--Optional:-->
        <arg0>${this.state.account}</arg0>
        <arg1>${target_number}</arg1>
        <arg2>${target_amount}</arg2>
        </ser:transfer>
        </soapenv:Body>
        </soapenv:Envelope>`;
        axios.post('http://ec2-3-83-241-5.compute-1.amazonaws.com:8080/ws-bank-1.0-SNAPSHOT/services/TransactionService',body,{
            headers: {'Content-Type': 'text/xml','Access-Control-Allow-Origin': '*'}
        })
        .then((res)=>{
            let xml = new DOMParser();
            xml = xml.parseFromString(res.data,'text/xml');
            let status_code =  xml.getElementsByTagName("return")[0].innerHTML;
            if(status_code === '200'){
                alert('transaksi berhasil');
            } else{
                alert('invalid transactions')
            }
            window.location.reload();
        })
    }
    // 200 berhasil
    // 402 debit input failed
    // 400 salah account / jumlah negatif
    // 401 balance ga cukup
    // 403 credit gagal
    render (){
        return(
            <div className='transfer'>
                <div className='transfer-body'>
                    <div id='transfer-text'>Transfer</div>
                    <input id='target-number' className='target' type='text' placeholder='Enter the destination account or virtual account number'></input>
                    <input id='target-amount' className='target' type='text' placeholder='Enter amount you want to transfer'></input>
                    <button id='send-button' type='submit' name='target-account' onClick={this.handleTransfer}>Send</button>
                </div>
            </div>
        )
    }
}

export default Transfer;