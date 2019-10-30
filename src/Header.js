import React from 'react';
import {Link} from 'react-router-dom';



export class Header extends React.Component {

  render (){
      return(
          <div>
          <h1>NavBar</h1>
              <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/transaction">Transaction</Link></li>
                  <li><Link to="/history">History</Link></li>
              </ul>
          </div>
      )
  }
}

export default Header;