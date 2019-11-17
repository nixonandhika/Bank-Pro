import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export class Header extends React.Component {

  render (){
    //   console.log('test');
      return(
          <div>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                <Grid item sm={9} xs={3}>
                    <Typography variant='h6' color='inherit'>
                        <b>BankPro</b>
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Link style={{color:'white','textDecoration': 'none','float':'right'}} to='/'>Home</Link>
                </Grid>
                <Grid item xs={2}>
                  <Link style={{color:'white','textDecoration': 'none','float':'right'}} to='/transaction'>Transaction</Link>
                </Grid>
                <Grid item xs={2}>
                  <Link style={{color:'white','textDecoration': 'none','float':'right'}} to='/history'>History</Link>
                </Grid>
                <Grid item xs={2}>
                  <Link style={{color:'white','textDecoration': 'none','float':'right'}} to='/login'>Logout</Link>
                </Grid>
                </Toolbar>
            </AppBar>
          </div>
      )
  }
}

export default Header;