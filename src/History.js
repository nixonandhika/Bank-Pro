import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Navigation from './Navigation';




export class History extends React.Component {
    render (){
        var rows = [
        {
            waktu_transaksi   : '2019-10-10 15:45:00',
            jenis_transaksi   : 'debit', 
            jumlah_transaksi  : 'Rp.50.000', 
            rekening_terkait  : '124535353'
        },
        {
            waktu_transaksi   : '2019-15-12 15:45:00',
            jenis_transaksi   : 'kredit', 
            jumlah_transaksi  : 'Rp.75.000', 
            rekening_terkait  : '1345353'
        },
        {
            waktu_transaksi   : '2018-12-12 23:45:00',
            jenis_transaksi   : 'kredit', 
            jumlah_transaksi  : 'Rp.60.000'
        }
        ];
        return(
        <div class='history'>
            <Navigation/>
            <Table> 
            <TableHead>
            <TableRow>
            <TableCell >#</TableCell>
            <TableCell >waktu transaksi</TableCell>
            <TableCell >jenis transaksi</TableCell>
            <TableCell >jumlah transaksi</TableCell>
            <TableCell >rekening terkait</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>      
                    { rows.map((data,key) =>
                <TableRow> 
                    <TableCell>{key+1}</TableCell>
                    <TableCell>{data.waktu_transaksi}</TableCell>
                    <TableCell>{data.jumlah_transaksi}</TableCell>
                    <TableCell>{data.jenis_transaksi}</TableCell>
                    <TableCell>{data.rekening_terkait || '-'}</TableCell>
                </TableRow>
                    )}
                </TableBody>
        </Table>
        </div>

        )
    }
}

export default History;