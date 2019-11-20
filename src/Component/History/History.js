import React from 'react';
import Table from 'react-bootstrap/Table'
// import axios from 'axios';

const response = `<?xml version='1.0' encoding='UTF-8'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns2:getHistoryResponse xmlns:ns2="http://service.transaction.com/"><return><account>7775162480</account><type>debit</type><amount>100000</amount><destination>7770000001</destination><time>2019-11-18 08:00:00.0</time><status>200</status></return><return><account>7775162480</account><type>debit</type><amount>45000</amount><destination>7770000001</destination><time>2019-11-19 02:10:35.0</time><status>200</status></return><return><account>7775162480</account><type>debit</type><amount>30000</amount><destination>7770000001</destination><time>2019-11-19 02:22:01.0</time><status>200</status></return><return><account>7775162480</account><type>debit</type><amount>10000</amount><destination>7770000001</destination><time>2019-11-19 21:54:14.0</time><status>200</status></return></ns2:getHistoryResponse></S:Body></S:Envelope>`;
export class History extends React.Component {

    // var rows = [
    //   {
    //     waktu_transaksi   : "2019-10-10 15:45:00",
    //     jenis_transaksi   : "debit", 
    //     jumlah_transaksi  : "Rp.50.000", 
    //     rekening_terkait  : "124535"
    //   },
    //   {
    //     waktu_transaksi   : "2019-15-12 15:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.75.000", 
    //     rekening_terkait  : "134533"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2019-10-10 15:45:00",
    //     jenis_transaksi   : "debit", 
    //     jumlah_transaksi  : "Rp.50.000", 
    //     rekening_terkait  : "124535"
    //   },
    //   {
    //     waktu_transaksi   : "2019-15-12 15:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.75.000", 
    //     rekening_terkait  : "134533"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   },
    //   {
    //     waktu_transaksi   : "2018-12-12 23:45:00",
    //     jenis_transaksi   : "kredit", 
    //     jumlah_transaksi  : "Rp.60.000"
    //   }
    // ];
    constructor(props){
      super(props);
      this.state = {
        list_history : [],
        dummy : [],
      }
    }
    componentDidMount(){
    let xml;
    //   let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.transaction.com/">
    //   <soapenv:Header/>
    //   <soapenv:Body>
    //   <ser:getHistory>
    //   <!--Optional:-->
    //   <arg0>7775162480</arg0>
    //   </ser:getHistory>
    //   </soapenv:Body>
    //   </soapenv:Envelope>`;
    //   let xml = new DOMParser();
    //   xml = xml.parseFromString(body,'text/xml');
    //   axios.post('http://d4f28991.ngrok.io/ws-bank-1.0-SNAPSHOT/services/TransactionService',body,{
    //     headers: {'Content-Type': 'text/xml','Access-Control-Allow-Origin': '*'}
    //   })
    //   .then(res=>{
    //     console.log(res.data);
    //     xml = new DOMParser();
    //     xml = xml.parseFromString(res.data,'text/xml');
    //     console.log(xml.getElementsByTagName("return"));
    //   })
        // console.log(response);
        xml = new DOMParser();
        xml = xml.parseFromString(response,'text/xml');
        this.setState({list_history : [...xml.getElementsByTagName("return")]});
        // console.log([...xml.getElementsByTagName("return")][0]);
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