import React from 'react';
import Table from 'react-bootstrap/Table'
import Navigation from './Navigation';


export class History extends React.Component {
  render (){
    var rows = [
      {
        waktu_transaksi   : "2019-10-10 15:45:00",
        jenis_transaksi   : "debit", 
        jumlah_transaksi  : "Rp.50.000", 
        rekening_terkait  : "124535"
      },
      {
        waktu_transaksi   : "2019-15-12 15:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.75.000", 
        rekening_terkait  : "134533"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2019-10-10 15:45:00",
        jenis_transaksi   : "debit", 
        jumlah_transaksi  : "Rp.50.000", 
        rekening_terkait  : "124535"
      },
      {
        waktu_transaksi   : "2019-15-12 15:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.75.000", 
        rekening_terkait  : "134533"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      },
      {
        waktu_transaksi   : "2018-12-12 23:45:00",
        jenis_transaksi   : "kredit", 
        jumlah_transaksi  : "Rp.60.000"
      }
    ];
    return(
      <div>
      <Navigation/>      
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
                { rows.map((data,i) =>
                <tr key={{i}}> 
                  <td >{i+1}</td>
                  <td >{data.waktu_transaksi}</td>
                  <td >{data.jumlah_transaksi}</td>
                  <td >{data.jenis_transaksi}</td>
                  <td >{data.rekening_terkait || '-'}</td>
                </tr>
                )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default History;