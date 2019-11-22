import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

export class History extends React.Component {
    constructor(props){
      super(props);
      let account = localStorage.getItem('account_number');
      this.state = {
        list_history : [],
        account: account
      }
 
    }
    componentDidMount(){
      let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.transaction.com/">
      <soapenv:Header/>
      <soapenv:Body>
      <ser:getHistory>
      <!--Optional:-->
      <arg0>${this.state.account}</arg0>
      </ser:getHistory>
      </soapenv:Body>
      </soapenv:Envelope>`;
      // let xml = new DOMParser();
      // xml = xml.parseFromString(body,'text/xml');
      axios.post('http://ec2-3-83-241-5.compute-1.amazonaws.com:8080/ws-bank-1.0-SNAPSHOT/services/TransactionService',body,{
        headers: {'Content-Type': 'text/xml','Access-Control-Allow-Origin': '*'}
      })
      .then((res)=>{
        let xml = new DOMParser();
        xml = xml.parseFromString(res.data,'text/xml');
        this.setState({list_history : [...xml.getElementsByTagName("return")]});

      })
    }
    render (){
      return(
        <div>
          <Table striped bordered hover responsive style={{width:'75%','border':'solid 1px','margin' : '5rem auto','text-align':'center'}}> 
            <thead>
              <tr>
                <th ><b>#</b></th>
                <th ><b>waktu transaksi</b></th>
                <th ><b>jenis transaksi</b></th>
                <th ><b>jumlah transaksi</b></th>
                <th ><b>rekening terkait</b></th>
              </tr>
            </thead>
            <tbody>      
                  { this.state.list_history.map((data,i) =>
                  <tr key={i}> 
                    <td >{i+1}</td>
                    <td >{data.getElementsByTagName('time')[0].innerHTML || '-'}</td>
                    <td >{data.getElementsByTagName('type')[0].innerHTML || '-'}</td>
                    <td >{data.getElementsByTagName('amount')[0].innerHTML || '-'}</td>
                    <td >{data.getElementsByTagName('destination')[0].innerHTML || '-'}</td>
                  </tr>
                  )}
            </tbody>
          </Table>
        </div>
      )
    }
}

export default History;