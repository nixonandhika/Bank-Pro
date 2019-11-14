import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';


const theme = createMuiTheme();

theme.typography.h6 = {
  fontSize: '0.7rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

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
      <Paper style={{'background':'#fffff','height':'100vh','width':'100vw', 'overflow':'hidden' ,'margin':'3em -1em 0 -0.5em'}}>
      <h1 style={{'padding-left': '2vw'}}>Hi, tony! </h1>
      
        <Grid container justify="center">
        <Table style={{width:'75%','border':'solid 1px'}}> 
          <TableHead>
            <TableRow >
            <ThemeProvider theme={theme}>
              <TableCell style={{'border': 'solid 1px','textAlign':'center'}}><Typography variant="h6" color="inherit"><b>#</b></Typography></TableCell>
              <TableCell style={{'border': 'solid 1px','textAlign':'center'}}><Typography variant="h6" color="inherit"><b>waktu transaksi</b></Typography></TableCell>
              <TableCell style={{'border': 'solid 1px','textAlign':'center'}}><Typography variant="h6" color="inherit"><b>jenis transaksi</b></Typography></TableCell>
              <TableCell style={{'border': 'solid 1px','textAlign':'center'}}><Typography variant="h6" color="inherit"><b>jumlah transaksi</b></Typography></TableCell>
              <TableCell style={{'border': 'solid 1px','textAlign':'center'}}><Typography variant="h6" color="inherit"><b>rekening terkait</b></Typography></TableCell>
            </ThemeProvider>
            </TableRow>
          </TableHead>
          <TableBody>      
                { rows.map((data,i) =>
                <TableRow key={{i}}> 
                  <TableCell style={{'borderRight': 'solid 1px','textAlign':'center'}}>{i+1}</TableCell>
                  <TableCell style={{'borderRight': 'solid 1px','textAlign':'center'}}>{data.waktu_transaksi}</TableCell>
                  <TableCell style={{'borderRight': 'solid 1px','textAlign':'center'}}>{data.jumlah_transaksi}</TableCell>
                  <TableCell style={{'borderRight': 'solid 1px','textAlign':'center'}}>{data.jenis_transaksi}</TableCell>
                  <TableCell style={{'textAlign':'center'}}>{data.rekening_terkait || '-'}</TableCell>
                </TableRow>
                )}
          </TableBody>
        </Table>
        </Grid>
        <h1>ee</h1>
      </Paper>
    )
  }
}

export default History;